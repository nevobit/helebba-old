import { Contact } from '@helebba/entities'
import { ArrowRight, Globe, Mail, MapPin, Phone } from 'lucide-react'
import styles from './Card.module.css';
import { Link } from 'react-router-dom'

const ContactInfo = ({ contact }: { contact: Contact }) => {
    return (
        <div className={styles.contactInfo} >
            <a
                href={contact?.email?.length > 4 ? `mailto:${contact?.email}` : "#"}
                className={styles.action}
            >
                <div>
                    <Mail
                        strokeWidth={1}
                        color='#fff'
                        fill={
                            contact?.email?.length > 4
                                ? "var(--main-color)"
                                : "rgba(100,100,100,.5)"
                        }
                    />
                </div>
                <p>Correo electrónico</p>
            </a>
            <a target="_blank" href={contact?.phone?.length > 4 ? `https://wa.me/${contact.phone}` : ""} className={styles.action}>
                <div>
                    <Phone
                        strokeWidth={1}
                        color='#fff'
                        fill={
                            contact?.phone?.length > 4
                                ? "var(--main-color)"
                                : "rgba(100,100,100,.5)"
                        }
                    />
                </div>
                <p>Llamada</p>
            </a>
            <a href={contact?.socialNetworks?.website ? contact.socialNetworks.website : ""} target="_blank" className={styles.action}>
                <div>
                    <Globe
                        strokeWidth={1}
                        color='#fff'
                        fill={
                            contact?.socialNetworks?.website?.length > 4
                                ? "var(--main-color)"
                                : "rgba(100,100,100,.5)"
                        }
                    />
                </div>
                <p>Web</p>
            </a>
            <a target="_blank" href={contact?.billAddress?.address ? `https://www.google.com/maps?q=${contact?.billAddress?.address}+${contact?.billAddress?.city}` : ""} className={styles.action}>
                <div>
                    <MapPin
                        fill={contact?.billAddress?.address && contact?.billAddress?.address?.length > 4 ? "var(--main-color)" : "rgba(100,100,100,.5)"}
                        strokeWidth={1}
                        color='#fff'
                    />
                </div>
                <p>Mapa</p>
            </a>
            <Link to={`/contacts/${contact?.id}`} className={styles.more}>
                <div>
                    <ArrowRight size={18} />
                </div>
                <p>Más</p>
            </Link>
        </div>
    )
}

export default ContactInfo