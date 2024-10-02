import LineScaleLoader from '@/containers/Loader';
import { useEditLead, useFunnel, useLeads } from '@/hooks';
import styles from './Funnel.module.css';
import OpportunityModal from './OpportunityForm';
import { Lead, Result } from '@helebba/entities';
import { DragDropContext, Droppable, Draggable, DraggableLocation } from 'react-beautiful-dnd';
import { DivisaFormater } from '@/utilities';

interface Props {
  draggableId?: string;
  destination: DraggableLocation | null | undefined;
  source?: DraggableLocation;
}

const Funnel = () => {
  const { isLoading, funnel } = useFunnel();
  const { leads } = useLeads();
  const { editLead } = useEditLead();

  const isPositionChanged = ({ destination, source }: Props) => {
    if (!destination) return false;
    const isSameList = destination.droppableId === source?.droppableId;
    const isSamePosition = destination.index === source?.index;
    return !isSameList || !isSamePosition;
  };

  const handleDrop = async({ draggableId, destination, source }: Props) => {
    if (!isPositionChanged({ source, destination })) return;
    const lead = JSON.parse(draggableId || "{}") as Lead || "";
    const status = destination?.droppableId;
    const position = calculateIssueListPosition({
      leads,
      destination,
      source,
      id: lead.id,
    });

    await editLead({ ...lead, position, id: lead.id, stageId: status });
  };

  if (isLoading) {
    return <LineScaleLoader />;
  }

  return (
    <div>
      <div className={styles.header}>
        <h2>{funnel?.name}</h2>
        <OpportunityModal />
      </div>

      <DragDropContext onDragEnd={handleDrop}>
        <div
          className={styles.funnel}
          style={{
            gridTemplateColumns: `repeat( ${funnel.stages.length},1fr)`,
          }}>
          {funnel.stages.map((stage) => (
            <Droppable key={stage.stageId} droppableId={stage.stageId}>
              {(provided) => (
                <div key={stage.stageId}>
                  <div className={styles.funnel_header}>
                    <h4>{stage.name}</h4>
                    <p>{leads?.items
                      .filter((lead: Lead) => lead.stageId == stage.stageId).length} oportunidades</p>
                  </div>

                  <div className={styles.space} {...provided.droppableProps} ref={provided.innerRef}>
                    {leads?.items
                      .filter((lead: Lead) => lead.stageId == stage.stageId)
                      .map((lead: Lead, index: number) => (
                        <Draggable key={lead.id}  draggableId={JSON.stringify(lead)} index={index}>
                          {(provided, snapshot) => (
                            <div
                            
                              data-snap={snapshot.isDragging}
                              className={styles.card}
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}>

                                <h3 className={styles.title} >{lead.name}</h3>
                                <p className={styles.copy} >{lead.contactName} - {lead.personName}</p>
                                <span className={styles.price} >{DivisaFormater({ value: lead.value || 0, currency: lead.currency })}</span>
                            </div>
                          )}
                        </Draggable>
                      ))}
                    {provided.placeholder}
                  </div>
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

const getAfterDropPrevNextIssue = (
  allIssues: Result<Lead>,
  destination: DraggableLocation | null | undefined,
  source: DraggableLocation | null | undefined,
  droppedIssueId: string,
) => {
  const beforeDropDestinationIssues = getSortedListIssues(
    allIssues,
    destination?.droppableId,
  );

  console.log(beforeDropDestinationIssues)
  const droppedIssue = allIssues?.items.find(
    (issue: Lead) => issue.id === droppedIssueId,
  );
  const isSameList = destination?.droppableId === source?.droppableId;

  const afterDropDestinationIssues = isSameList
    ? moveItemWithinArray(
        beforeDropDestinationIssues,
        droppedIssue,
        destination?.index,
      )
    : insertItemIntoArray(
        beforeDropDestinationIssues,
        droppedIssue,
        destination?.index,
      );

  return {
    prevIssue: afterDropDestinationIssues[(destination?.index ?? 0) - 1],
    nextIssue: afterDropDestinationIssues[(destination?.index ?? 0) + 1],
  };
};
const getSortedListIssues = (issues: Result<Lead>, status?: string) =>
  issues?.items
    ?.filter((issue) => issue.stageId === status)
    .sort((a, b) => a.position - b.position);

export const moveItemWithinArray = (arr: Lead[], item?: Lead, newIndex?: number) => {
  const arrClone = [...arr];
  const oldIndex = arrClone.indexOf(item!);
  arrClone.splice(newIndex!, 0, arrClone.splice(oldIndex, 1)[0]);
  return arrClone;
};

const calculateIssueListPosition = (data: { leads: Result<Lead>, destination: DraggableLocation | null | undefined, source: DraggableLocation | null | undefined, id: string }) => {
  const { prevIssue, nextIssue } = getAfterDropPrevNextIssue(
    data.leads,
    data.destination,
    data.source,
    data.id,
  );
  let position;

  if (!prevIssue && !nextIssue) {
    position = 1;
  } else if (!prevIssue) {
    position = nextIssue.position - 1;
  } else if (!nextIssue) {
    position = prevIssue.position + 1;
  } else {
    position =
      prevIssue.position +
      (nextIssue.position - prevIssue.position) / 2;
  }
  return position;
};

export const insertItemIntoArray = (arr: Lead[], item?: Lead, index?: number) => {
  const arrClone = [...arr];
  arrClone.splice(index!, 0, item!);
  return arrClone;
};
export default Funnel;
