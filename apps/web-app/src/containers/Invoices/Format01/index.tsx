import { Document, Page, Text, View, Image, } from '@react-pdf/renderer';
import { styles } from './Format01.module';
import { DivisaFormater } from '@/utilities/divisa-formater';
import { Account, ProductDocument } from '@helebba/entities';
import { Element } from '@/hooks/documents/useHandleDocument';

interface Props {
    name?: string;
    city?: string;
    phone?: string;
    date?: string;
    due?: string;
    specs?:Partial<ProductDocument>[] | Partial<Element>[];
    account?: Partial<Account>;
}

const Format01 = ({specs, name, city, phone, account, date, due}: Props) => {
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.header}>
            <Image
              src={{
                uri: account?.logo || '',
                method: 'GET',
                headers: {},
                body: '',
              }}
              style={styles.logo}
            />
            <View
              style={{
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#333',
                  fontSize: 12,
                  marginBottom: '3px',
                  fontFamily: 'Helvetica-Bold',
                }}>
                {account?.name}
              </Text>
              <Text
                style={{
                  color: '#333',
                  fontSize: 9,
                  marginBottom: '3px',
                }}>
                {account?.identification}
              </Text>
              <Text
                style={{
                  color: '#333',
                  fontSize: 9,
                  marginBottom: '3px',
                }}>
                {account?.address}
              </Text>
              <Text
                style={{
                  color: '#333',
                  fontSize: 9,
                  marginBottom: '3px',
                }}>
                {account?.city} - Antioquia{account?.department}
              </Text>
              <Text
                style={{
                  color: '#333',
                  fontSize: 9,
                  marginBottom: '3px',
                }}>
                {account?.phone}
              </Text>
              <Text
                style={{
                  color: '#333',
                  fontSize: 9,
                  marginBottom: '3px',
                }}>
                {account?.website}
                {/* ventas@prooving.com */}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: '#333',
                  fontSize: 10,
                  marginBottom: '2px',
                  fontFamily: 'Helvetica-Bold',
                }}>
                No. P1362
              </Text>
              <Text
                style={{
                  color: '#333',
                  fontSize: 10,
                }}>
                Facura de Venta
              </Text>
            </View>
          </View>
          <View style={styles.client_information}>
            <View style={styles.info}>
              <View style={styles.field}>
                <Text style={styles.title}>SEÑOR(ES)</Text>
                <Text
                  style={{
                    fontSize: 9,
                    color: '#333',
                    height: 20,
                    paddingHorizontal: 5,
                    paddingVertical: 5,
                    width: '85.5%',
                  }}>
                  {name}
                </Text>
              </View>
              <View style={styles.field}>
                <Text
                  style={[
                    styles.title,
                    {
                      borderTopWidth: '0.1px',
                      borderTopColor: 'rgba(0,0,0,0.01)',
                    },
                  ]}>
                  CIUDAD
                </Text>
                <Text
                  style={{
                    fontSize: 9,
                    color: '#333',
                    borderTopWidth: '0.1px',
                    borderTopColor: 'rgba(0,0,0,0.01)',
                    width: '85.5%',
                    height: 20,
                    paddingHorizontal: 5,
                    paddingVertical: 5,
                  }}>
                  {city}Medellin
                </Text>
              </View>
              <View style={styles.field}>
                <Text
                  style={[
                    styles.title,
                    {
                      borderTopWidth: '0.1px',
                      borderTopColor: 'rgba(0,0,0,0.01)',
                    },
                  ]}>
                  TELÉFONO
                </Text>
                <Text
                  style={{
                    fontSize: 9,
                    color: '#333',
                    borderTopWidth: '0.1px',
                    borderTopColor: 'rgba(0,0,0,0.01)',
                    width: '85.5%',
                    height: 20,
                    paddingHorizontal: 5,
                    paddingVertical: 5,
                  }}>
                  {phone}
                  3053575344
                </Text>
              </View>
            </View>
            <View style={styles.date}>
              <View>
                <Text
                  style={{
                    fontSize: 8,
                    height: '50%',
                    borderTopWidth: '0.1px',
                    borderTopColor: 'rgba(0,0,0,0.01)',
                    backgroundColor: 'rgba(0,0,0,0.1)',
                    paddingTop: 2,
                    fontFamily: 'Helvetica-Bold',
                  }}>
                  FECHA DE EXPEDICIÓN
                </Text>
                <Text
                  style={{
                    fontSize: 9,
                    height: '50%',
                    paddingTop: 2,
                  }}>
                  {date}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 8,
                    height: '50%',
                    borderTopWidth: '0.1px',
                    borderTopColor: 'rgba(0,0,0,0.01)',
                    backgroundColor: 'rgba(0,0,0,0.1)',
                    paddingTop: 2,
                    fontFamily: 'Helvetica-Bold',
                  }}>
                  FECHA DE VENCIMIENTO
                </Text>
                <Text
                  style={{
                    fontSize: 9,
                    height: '50%',
                    paddingTop: 2,
                  }}>
                  {due}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              padding: 5,
              marginBottom: 10,
            }}>
            <View
              style={{
                backgroundColor: 'rgba(0,0,0,.1)',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                paddingHorizontal: 10,
                paddingVertical: 10,
                borderRadius: 3,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
              }}>
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: 'Helvetica-Bold',
                  textAlign: 'left',
                  width: '100%',
                }}>
                Concepto
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: 'Helvetica-Bold',
                  textAlign: 'left',
                  width: '100%',
                }}>
                Descripción
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: 'Helvetica-Bold',
                  textAlign: 'left',
                  width: '100%',
                }}>
                Cantidad
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: 'Helvetica-Bold',
                  textAlign: 'left',
                  width: '100%',
                }}>
                Precio
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: 'Helvetica-Bold',
                  textAlign: 'left',
                  width: '100%',
                }}>
                Total
              </Text>
            </View>
            {specs?.map((spec: Partial<ProductDocument>) => (
              <View
                key={spec.id}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  borderBottomColor: 'rgba(0,0,0,0.1)',
                  borderLeftColor: 'rgba(0,0,0,0.1)',
                  borderRightColor: 'rgba(0,0,0,0.1)',
                  borderBottomWidth: 0.2,
                  borderLeftWidth: 0.1,
                  borderRightWidth: 0.1,
                }}>
                <Text
                  style={{
                    fontSize: 9,
                    textAlign: 'left',
                    width: '100%',
                  }}>
                  {spec.concept}
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    textAlign: 'left',
                    width: '100%',
                  }}>
                  {spec.description}
                </Text>
                <Text
                  style={{
                    fontSize: 9,
                    textAlign: 'left',
                    width: '100%',
                  }}>
                  {spec.amount}
                </Text>
                <Text
                  style={{
                    fontSize: 9,
                    textAlign: 'left',
                    width: '100%',
                  }}>
                  {DivisaFormater({
                    value: spec.price || 0,
                    country: account?.country,
                  })}
                </Text>
                <Text
                  style={{
                    fontSize: 9,
                    textAlign: 'left',
                    width: '100%',
                  }}>
                  {DivisaFormater({
                    value: spec.price || 0 * (spec.amount ?? 0),
                    country: account?.country,
                  })}
                </Text>
              </View>
            ))}
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            }}>
            <View
              style={{
                paddingHorizontal: 10,
                flexDirection: 'row',
                gap: 2,
              }}>
              <Image
                src="/qrcode1.png"
                style={{
                  width: 100,
                  height: 100,
                }}
              />
              <View
                style={{
                  marginTop: 18,
                }}>
                <Text
                  style={{
                    fontSize: 8,
                    color: '#333',
                  }}>
                  Moneda: COP
                </Text>
                <Text
                  style={{
                    fontSize: 8,
                    color: '#333',
                  }}>
                  Fecha de generación: {date}
                </Text>
                <Text
                  style={{
                    fontSize: 8,
                    color: '#333',
                  }}>
                  Tipo de documento: Nacional
                </Text>
                <Text
                  style={{
                    fontSize: 8,
                    color: '#333',
                  }}>
                  Tipo de operacion: Estandar
                </Text>
                <Text
                  style={{
                    fontSize: 8,
                    color: '#333',
                  }}>
                  Forma de pago: Contado
                </Text>
                <Text
                  style={{
                    fontSize: 8,
                    color: '#333',
                  }}>
                  Medio de pago: Efectivo
                </Text>
              </View>
            </View>

            <Text
              style={{
                backgroundColor: 'rgba(0,0,0,0.1)',
                fontSize: 12,
                marginRight: 10,
                minWidth: 100,
                padding: 10,
                borderRadius: 3,
                fontFamily: 'Helvetica-Bold',
              }}>
              Total:{' '}
              {DivisaFormater({
                value:
                  specs?.reduce(
                    (a: number, c: Partial<ProductDocument>) =>
                      a + c.price! * c.amount!,
                    0,
                  ) || 0,
                country: account?.country,
              })}
            </Text>
          </View>

          <Text
            style={{
              fontSize: 8,
              marginTop: 20,
              marginBottom: 20,
              color: '#333',
              maxWidth: '90%',
              paddingHorizontal: 10,
            }}>
            {account?.conditions}
            {/* En <Text style={{ fontFamily: 'Helvetica-Bold' }}>Prooving S.A.S</Text>, estamos tan seguros de la
                    calidad de nuestros productos que ofrecemos una{' '}
                    <Text style={{ fontFamily: 'Helvetica-Bold' }}>garantía</Text> de{' '}
                    <Text style={{ fontFamily: 'Helvetica-Bold' }}>18 meses</Text> en todos nuestros productos. Si
                    experimenta algún problema con su equipo durante los primeros{' '}
                    <Text style={{ fontFamily: 'Helvetica-Bold' }}>18 meses</Text> después de la compra, háganoslo saber
                    y haremos todo lo posible para resolverlo de manera rápida y efectiva. Si aún no está satisfecho, le
                    ofrecemos un <Text style={{ fontFamily: 'Helvetica-Bold' }}>reembolso completo</Text>. Queremos que
                    se sienta seguro y feliz con su compra, y nuestra{' '}
                    <Text style={{ fontFamily: 'Helvetica-Bold' }}>garantía</Text> de{' '}
                    <Text style={{ fontFamily: 'Helvetica-Bold' }}>18 meses</Text> demuestra nuestro compromiso con su
                    satisfacción total. */}
          </Text>

          <View style={styles.sings}>
            <View>
              {/* <Text style={styles.author}>Nestor Mosquera</Text> */}
              {/* <h3>{userState.user.name} {userState.user.lastname}</h3> */}
              <View style={styles.line}></View>
              <Text style={styles.signs_text}>ELABORADO POR</Text>
            </View>
            <View
              style={{
                position: 'relative',
                marginTop: 10,
              }}>
              {/* <Image
                            src="https://i.postimg.cc/50bQb28Q/1-Stamp.png"
                            style={{
                                width: 160,
                                height: 160,
                                position: 'absolute',
                                top: -90,
                                left: 5,
                            }}
                        /> */}
              <Text style={styles.line}></Text>
              <Text style={styles.signs_text}>ACEPTADA, FIRMA Y/O SELLO</Text>
            </View>
          </View>
        </Page>
        {/* <Canvas paint={canvasRef} ref={canvasRef} />         */}
      </Document>
    );
};

export default Format01;