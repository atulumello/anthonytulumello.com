import React from 'react'

import FseCalculator from './fseCalculator'
import Anthonytulumello from './anthonytulumello'
import Photosite from './photosite'
import Boiler from './boiler'





class Portfolio extends React.Component {

    constructor(props){
        super(props)

        this.project = {
            fseCalculator: {
                live: 'https://www.greatertorontofinancial.com',
                github: 'https://github.com/atulumello/fse-calculator'
            },
            anthonytulumello: {
                github: 'https://github.com/atulumello/anthonytulumello.com'
            },
            photoSite: {
                live: 'https://anthonytulumello.com/photo-site'
            },
            boiler: {
                live: 'https://gatsby-bootstrap-boiler.vercel.app/',
                github: 'https://github.com/atulumello/gatsby-bootstrap-boiler'
            }
        }
        
    }

    render() {

        return(
            <div>

                <div className="slide">
                    <FseCalculator github={this.project.fseCalculator.github} live={this.project.fseCalculator.live} />
                </div>
                <div className="slide">
                    <Anthonytulumello github={this.project.anthonytulumello.github} />
                </div>
                <div className="slide">
                    <Photosite live={this.project.photoSite.live} />
                </div>
                <div className="slide">
                    <Boiler github={this.project.boiler.github} live={this.project.boiler.live} />
                </div>
            </div>
        )

    }

}

export default Portfolio