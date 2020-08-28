import React from "react"
import ReactFullpage from "@fullpage/react-fullpage"

import Menu from '../components/menu'
import Welcome from '../components/welcome/'
import Footer from '../components/footer'

import '../scss/styles.scss'


const SEL = 'custom-section'
const SECTION_SEL = `.${SEL}`

// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
// This is no longer required for the scrollOverflow option.
const pluginWrapper = () => {
  /*
  * require('./fullpage.fadingEffect.min'); // Optional. Required when using the "fadingEffect" extension.
  */
};

const bgColors = ['#FFF', '#0798ec', '#fc6c7c', '#435b71', 'orange', 'blue', 'purple', 'yellow']

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sectionsColor: [...bgColors],
      fullpages: [
        {
          title: 'Welcome',
          content: <Welcome />
        },
        {
          title: 'About Me',
          content: 'I am content',
        },
        {
          title: 'Portfolio',
          content: 'Portfolio'
        },
        {
          title: 'Contact Me',
          content: 'Contact Form'
        }
      ],
    };
  }

  onLeave(origin, destination, direction) {
    console.log('onLeave', { origin, destination, direction })
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
  }

  moveSectionDown() {
    window.fullpage_api.moveSectionDown()
  }

  render() {
    const { fullpages } = this.state

    if (!fullpages.length) {
      return null;
    }

    return (
      <div className="App">
        <Menu />
        <ReactFullpage
          debug /* Debug logging */

          // Required when using extensions
          pluginWrapper={pluginWrapper}

          // fullpage options
          licenseKey={'YOUR_KEY_HERE'} // Get one from https://alvarotrigo.com/fullPage/pricing/
          navigation
          navigationPosition= {'right'}
	        navigationTooltips= {['Welcome', 'About Me', 'Portfolio', 'Contact Me']}
	        showActiveTooltip= {true}
          anchors={['welcome', 'about', 'portfolio', 'contact']}
          sectionSelector={SECTION_SEL}
          onLeave={this.onLeave.bind(this)}
          //sectionsColor={this.state.sectionsColor}

          render={comp => (
            <ReactFullpage.Wrapper>
              {fullpages.map(({ title , content }) => (
                <div key={title} className={SEL}>
                  <div>{content}</div>
                </div>
              ))}
            </ReactFullpage.Wrapper>
          )}
        />
        <Footer />
      </div>
    )
  }
}

export default Home