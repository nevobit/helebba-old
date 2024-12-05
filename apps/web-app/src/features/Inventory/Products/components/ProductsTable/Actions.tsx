import { Menus } from '@helebba/design-system/web'
import { Product } from '@helebba/entities';
import { useNavigate } from 'react-router-dom'

const Actions = ({ id, row }: { id: string, row: Product }) => {
    const navigate = useNavigate();

    return (
        <Menus.Menu>
            <Menus.Toggle id={`actions-product-menu-${id}`} />
            <Menus.List id={`actions-product-menu-${id}`} >
                <Menus.Button onClick={() => navigate(`/products/${row.id}`)} >
                    Ver
                </Menus.Button>
                <Menus.Button>
                    Editar
                </Menus.Button>
                <Menus.Button>
                    Eliminar
                </Menus.Button>
            </Menus.List>
        </Menus.Menu>
    )
}

export default Actions