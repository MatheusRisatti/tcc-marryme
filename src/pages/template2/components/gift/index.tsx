import { Card } from '../card'
import { SectionTitle } from '../section-title'
import './gift.css'


export function Gift() {
    return (

        <div className="gift">
            
            <div className="gift-content">
                <div className="gift-title">
                    <SectionTitle title='Presentes'></SectionTitle>
                </div>
                <div className="gift-list">
                    <Card />
                </div>
            </div>
        </div>
    )
}