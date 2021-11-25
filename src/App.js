import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar, Nav, Container, Row, Col} from 'react-bootstrap';
import twitter from './images/twitter.png'
import discord from './images/discord.png'
import insta from './images/insta.jpeg'
import link from './images/linkedin.png'
import bgImg from './images/bg.png'
import img1 from './images/img1.jpeg'
import img2 from './images/img2.jpeg'
import img3 from './images/img3.jpeg'
import img4 from './images/img4.jpeg'
import gif from './images/gif.gif'
import mrcf from './images/cf.jpeg'
import mrscf from './images/mrscf.jpeg'
import Artist from './images/Artist.jpeg'
import Programmer from './images/Programmer.jpeg'
import Developer from './images/Developer.jpeg'

function App() {

  const styles = {
    backgroundImage: 'url('+bgImg+')',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: '100%',
    backgroundSize: 'cover',
    minHeight: '100%',
    width: '100%',
  };

  return (
    <main style={styles}>
      <Navbar className="navbar" fixed="top"  expand="lg" variant="dark">
        <Container>
          {/* <Navbar.Brand href="#home">BOOTY DEMONS</Navbar.Brand> */}
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
          {/* BOOTY DEMONS */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#About">About</Nav.Link>
              <Nav.Link href="#Features">Features</Nav.Link>
              <Nav.Link href="#Roadmap">Roadmap</Nav.Link>
              <Nav.Link href="#Team">Team</Nav.Link>
              <Nav.Link href="#Faq">Faq</Nav.Link>
              <Nav.Link href="#Contact">Contact Us</Nav.Link>
            </Nav>
            <hr></hr>
            <Nav className="me-auto">
              {/* <Nav.Link className="socail"> */}
                <a className="socail" rel="noopener noreferrer" target="_blank" href="https://twitter.com/bootydemonsnft">
                  <img className="round"
                    alt=""
                    src={twitter}
                    width="30"
                    height="30"
                  />
                </a>
              {/* </Nav.Link> */}
              {/* <Nav.Link className="socail"> */}
                <a className="socail" rel="noopener noreferrer" target="_blank" href="https://discord.gg/PNn2JrXs">
                  <img className="round"
                    alt=""
                    src={discord}
                    width="30"
                    height="30"
                  />
                </a>
              {/* </Nav.Link> */}
              {/* <Nav.Link className="socail"> */}
                <a className="socail" rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/bootydemonsnft">
                  <img className="round"
                    alt=""
                    src={insta}
                    width="30"
                    height="30"
                  />
                </a>
              {/* </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="hero-1" id="home">
          <Row className="mt-5">
            <Col className="mt-5 d-flex justify-content-center text-center">
              <div className="intro white">
                <h1>Welcome to the Booty Demons Back Room!</h1>
                <br></br>
                <h3>“Life’s more fun when you’re a little cheeky.” 🍑😈</h3>
              </div>
            </Col>
          </Row>

        <Row className="mt-5 justify-content-center text-center">
          <Col className="d-flex justify-content-center text-center">
            <div className="tran-box opensea">
              <a className="opensealink" href="#">
                VIEW ON OPENSEA
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid id="About" className="hero-2">
        <Container>
            <div className="justify-content-center text-center">
                <h1 className="white"><strong>ABOUT</strong></h1> 
            </div>
          <Row>
            <Col md={6} className="mt-3 justify-content-center text-center">
              <Row className="mt-5">
                <Col className="justify-content-center text-center">
                  <img className="mb-5"
                      alt=""
                      src={img1}
                      width="100%"
                    />
                </Col>
                <Col className="justify-content-center text-center">
                  <img
                    alt=""
                    src={img2}
                    width="100%"
                  />
                </Col>
              </Row>
              <Row>
                <Col className="justify-content-center text-center">
                  <img className="mb-5"
                      alt=""
                      src={img3}
                      width="100%"
                    />
                </Col>
                <Col className="justify-content-center text-center">
                  <img
                    alt=""
                    src={img4}
                    width="100%"
                  />
                </Col>
              </Row>
            </Col>
            <Col className="mt-3 justify-content-center text-center">
              <div className="mt-5">
                <h5 className="white">6,666 Demons have been let loose and they’re all after one thing… World peace. HAHAHA just kidding. They’re after BOOTY! The Demons’ travels have taken them to the far reaches of the earth and while no one seems to know why, the Demons have been seen collecting a few souvenirs amongst their explorations. 
                </h5> 
              </div>
              <div className="mt-5">
                <h5 className="white">Please help us to collect all the Demons! We’ll need to act fast because anything could happen when you’re dealing with the Booty Demons.
                </h5> 
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid id="Features" className="hero-3">
        <Container>
          {/* <Row className="pd-5 mt-5 justify-content-center text-center">
            <h1><strong>About</strong></h1> 
          </Row> */}
          <Row>
            <Col md={6} className="justify-content-center text-center">
              <div className="mt-5">
                <h1 className="white"><strong>FEATURES</strong></h1> 
              </div>
              <div className="mt-5">
                <h5 className="white">Booty Demons NFT is a collection of 6,666 unique digital collectibles. The demons are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS. Reveal on XX/XX/XXXX.
                </h5> 
              </div>
              {/* <div className="mt-5">
                <p className="white">The BILLIONAIRE CLUB is a private collection of 10 000 billionaire apes NFTs—unique digital collectibles. The apes are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS. Reveal on October 20th.
                </p> 
              </div> */}
            </Col>
            <Col className="mt-3 d-flex justify-content-center text-center">
              <div>
                <img
                alt=""
                src={gif}
                width="100%"
                height="100%"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid id="Roadmap" className="hero-4">
        <Container>
          <Row className="pd-5 mt-5 justify-content-center text-center">
            <h1 className="white"><strong>ROADMAP</strong></h1> 
            <h3 className="white">
              As we value our community and its creativity, our roadmap will be updated according to your comments and ideas.
            </h3>
          </Row>
          <Row className="mt-5">
            <Col xs={2} md={2} className="justify-content-center text-center">
              <div className="box">
                <strong className="per">25%</strong>
              </div>
            </Col>
            <Col>
              <h4 className="white"><strong className="per">5 ETH</strong> buyback to raise floor level, Demons secured on buyback will then be distributed via giveaways and airdrops.
              </h4>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col xs={2} md={2} className="justify-content-center text-center">
              <div className="box">
                <strong className="per">50%</strong>
              </div>
            </Col>
            <Col>
              <h4 className="white"> <strong className="per">10 ETH</strong> buyback to raise floor level, demons secured on buyback will then be distributed via giveaways/airdrops, and plans for Phase 2 of the Booty Demons Saga will be revealed.
              </h4>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col xs={2} md={2} className="justify-content-center text-center">
              <div className="box">
                <strong className="per">75%</strong>
              </div>
            </Col>
            <Col>
              <h4 className="white">Additional <strong className="per">10 ETH</strong> buyback to raise floor level, demons secured on buyback will then be distributed via giveaways/airdrops, and community will help determine a charitable cause to be the recipient of <strong className="per">10 ETH</strong> - your voices matter!
              </h4>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col xs={2} md={2} className="justify-content-center text-center">
              <div className="box last-box">
                <strong className="per">100%</strong>
              </div>
            </Col>
            <Col>
              <h4 className="white">The Booty Demons have been contained! <strong className="per">20 ETH</strong> buyback to raise floor level. Phase 3 revealed. We’ll only ever be as great as our community!
              </h4>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid id="Team" className="hero-5">
        <Container>
          <Row className="justify-content-center text-center">
            <h1 className="white"><strong>OUR TEAM</strong></h1> 
            <h4 className="white">
              The Booty Demons NFT Project was created by a team dedicated to absolute success!
            </h4>
            <h4 className="white">
              Our Artists, Programmers, and Developers have worked tirelessly to deliver an NFT Community that will be able to create future utility, while also delivering an aesthetically pleasing unique NFT to each and every investor.
            </h4>
          </Row>
          <Row className="mt-5 justify-content-center text-center">
            <Col sm={6}>
              <div className="white">
                <img
                  alt=""
                  src={mrcf}
                  width="300"
                  height="300"
                />
                <h5 className="mt-2">Mr. G</h5>
                <p>The Co-Founder</p>
              </div>
            </Col>
            <Col sm={6}>
              <div className="white">
                <img
                  alt=""
                  src={mrscf}
                  width="300"
                  height="300"
                />
                <h5 className="mt-2">Mrs. G</h5>
                <p>The Co-Founder</p>
              </div>
            </Col>
            <Col>
              <div className="white">
                <img
                  alt=""
                  src={Artist}
                  width="300"
                  height="300"
                />
                <h5 className="mt-2">Mr. U</h5>
                <p>The Artist</p>
              </div>
            </Col>
          {/* </Row>
          <Row className="mt-5 justify-content-center text-center"> */}
            <Col>
              <div className="white">
                <img
                  alt=""
                  src={Programmer}
                  width="300"
                  height="300"
                />
                <h5 className="mt-2">Mr. D</h5>
                <p>The Programmer</p>
              </div>
            </Col>
            <Col>
              <div className="white">
                <img
                  alt=""
                  src={Developer}
                  width="300"
                  height="300"
                />
                <h5 className="mt-2">Mr. M</h5>
                <p>The Developer</p> 
                <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/i_m_chappie/">
                  <img className="round"
                    alt=""
                    src={insta}
                    width="30"
                    height="30"
                  />
                </a>
                <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/ankit-kumar-saini-060527173/">
                  <img className="round"
                    alt=""
                    src={link}
                    width="30"
                    height="30"
                  />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid id="Faq" className="hero-4">
        <Container>
          <Row className="pd-5 mt-5 justify-content-center text-center">
            <h1 className="white"><strong>FREQUENTLY ASKED QUESTIONS</strong></h1>
          </Row>
          <Row className="mt-5">
            <Col>
              <h2 className="white">
                Where can I view my NFTs ? 
              </h2>
              <h4 className="per"> ⁃ Once your Booty Demon is minted, just connect to your OpenSea account to view your NFTs.</h4>
            </Col>
            <hr className="white"></hr>
          </Row>
          <Row className="mt-5">
            <Col>
              <h2 className="white">
              Why mint a Booty Demons NFT?
              </h2>
              <h4 className="per"> - We encourage our community to share and grow with us! Become part of an ambitious yet cheeky collective that will help determine the future direction of our project.</h4>
            </Col>
            <hr className="white"></hr>
          </Row>
          <Row className="mt-5">
            <Col>
              <h2 className="white">
              How can I use my NFT?
              </h2>
              <h4 className="per"> ⁃ You will be able to use your NFT as an avatar and exclusive pass for upcoming events, giveaways, airdrops, and so much more.</h4>
            </Col>
            <hr className="white"></hr>
          </Row>
        </Container>
      </Container>

      <Container fluid id="Contact" className="hero-5">
        <Container>
          <Row className="justify-content-center text-center">
            <h1 className="white"><strong>CONTACT US</strong></h1> 
            <h4 className="per">
              Join our Discord and Follow
            </h4>
          </Row>
          <Row className="mt-5 justify-content-center text-center">
            <Col>
              <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/bootydemonsnft">
                <img className="round"
                  alt=""
                  src={twitter}
                  width="30"
                  height="30"
                />
              </a>
            </Col>
            <Col>
            <a rel="noopener noreferrer" target="_blank" href="https://discord.gg/PNn2JrXs">
              <img className="round"
                alt=""
                src={discord}
                width="30"
                height="30"
              />
            </a>
            </Col>
            <Col>
            <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/bootydemonsnft">
              <img className="round"
                alt=""
                src={insta}
                width="30"
                height="30"
              />
            </a>
            </Col>
          </Row>
        </Container>
      </Container>

    </main>
  );
}

export default App;
