import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar, Nav, Container, Row, Col} from 'react-bootstrap';
import twitter from './images/twitter.png'
import discord from './images/discord.png'
import insta from './images/insta.jpeg'
import bgImg from './images/bg.png'
import img2 from './images/img2.png'
import img3 from './images/img3.png'
import gif from './images/gif.gif'

function App() {

  const styles = {
    backgroundImage: 'url('+bgImg+')',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
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
              {/* <Nav.Link href="#Team">Team</Nav.Link> */}
              <Nav.Link href="#Faq">Faq</Nav.Link>
            </Nav>
            <hr></hr>
            <Nav className="me-auto">
              <Nav.Link className="socail">
                <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/bootydemonsnft">
                  <img className="round"
                    alt=""
                    src={twitter}
                    width="30"
                    height="30"
                  />
                </a>
              </Nav.Link>
              <Nav.Link className="socail">
                <a rel="noopener noreferrer" target="_blank" href="https://discord.gg/bootydemonsnft">
                  <img className="round"
                    alt=""
                    src={discord}
                    width="30"
                    height="30"
                  />
                </a>
              </Nav.Link>
              <Nav.Link className="socail">
                <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/bootydemonsnft/">
                  <img className="round"
                    alt=""
                    src={insta}
                    width="30"
                    height="30"
                  />
                </a>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="hero-1" id="home">
          <Row className="mt-3">
            <Col className="d-flex justify-content-center text-center">
              <div className="tran-box intro white">
                <h1>Welcome to the Booty Demons Back Room!</h1>
                <br></br>
                <h3>“Life’s more fun when you’re a little cheeky.” 🍑😈</h3>
              </div>
            </Col>
          </Row>

        <Row className="mt-3 justify-content-center text-center">
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
          {/* <Row className="pd-5 justify-content-center text-center">
            <h1><strong>About</strong></h1> 
          </Row> */}
          <Row className="mt-5">
            <Col className="mt-3 d-flex justify-content-center text-center">
              <div>
                <img className="mb-5"
                    alt=""
                    src={img2}
                    width="300"
                    height="300"
                  />
                   <img
                    alt=""
                    src={img2}
                    width="300"
                    height="300"
                  />
              </div>
            </Col>
            <Col className="mt-3 d-flex justify-content-center text-center">
              <div>
                <img className="mb-5"
                    alt=""
                    src={img3}
                    width="300"
                    height="300"
                  />
                   <img
                    alt=""
                    src={img3}
                    width="300"
                    height="300"
                  />
              </div>
            </Col>
            <Col className="mt-3 justify-content-center text-center">
              <div className="mt-5">
                <h1 className="white"><strong>ABOUT</strong></h1> 
              </div>
              <div className="mt-5">
                <p className="white">6,666 Demons have been let loose and they’re all after one thing… World peace. HAHAHA just kidding. They’re after BOOTY! The Demons’ travels have taken them to the far reaches of the earth and while no one seems to know why, the Demons have been seen collecting a few souvenirs amongst their explorations. 
                </p> 
              </div>
              <div className="mt-5">
                <p className="white">Please help us to collect all the Demons! We’ll need to act fast because anything could happen when you’re dealing with the Booty Demons.
                </p> 
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
          <Row className="mt-5">
            <Col className="mt-3 mr-5 justify-content-center text-center">
              <div className="mt-5">
                <h1 className="white"><strong>FEATURES</strong></h1> 
              </div>
              <div className="mt-5">
                <p className="white">Booty Demons NFT is a collection of 6,666 unique digital collectibles. The demons are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS. Reveal on XX/XX/XXXX.
                </p> 
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
                width="640"
                height="640"
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
            <Col md={2}>
              <div className="box">
                <strong className="per">25%</strong>
              </div>
            </Col>
            <Col>
              <h4 className="white">5 ETH buyback to raise floor level, Demons secured on buyback will then be distributed via giveaways and airdrops.
              </h4>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md={2}>
              <div className="box">
                <strong className="per">50%</strong>
              </div>
            </Col>
            <Col>
              <h4 className="white">10 ETH buyback to raise floor level, demons secured on buyback will then be distributed via giveaways/airdrops, and plans for Phase 2 of the Demon Booty Saga will be revealed.
              </h4>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md={2}>
              <div className="box">
                <strong className="per">75%</strong>
              </div>
            </Col>
            <Col>
              <h4 className="white">Additional 10 ETH buyback to raise floor level, demons secured on buyback will then be distributed via giveaways/airdrops, and community will help determine a charitable cause to be the recipient of 10 ETH - your voices matter!
              </h4>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md={2}>
              <div className="box">
                <strong className="per">100%</strong>
              </div>
            </Col>
            <Col>
              <h4 className="white">The Booty Demons have been contained! 20 ETH buyback to raise floor level. Phase 3 revealed. We’ll only ever be as great as our community!
              </h4>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid id="Faq" className="hero-5">
        <Container>
          <Row className="pd-5 mt-5 justify-content-center text-center">
            <h1 className="white"><strong>FREQUENTLY ASKED QUESTIONS</strong></h1>
          </Row>
          <Row className="mt-5">
            <Col>
              <h3 className="white">
                Where can I view my NFTs ? 
              </h3>
              <h4>Once minted, simply connect to your OpenSea account to view your NFTs.</h4>
            </Col>
            <hr className="white"></hr>
          </Row>
          <Row className="mt-5">
            <Col>
              <h3 className="white">
                Where can I view my NFTs ? 
              </h3>
              <h4>Once minted, simply connect to your OpenSea account to view your NFTs.</h4>
            </Col>
            <hr className="white"></hr>
          </Row>
          <Row className="mt-5">
            <Col>
              <h3 className="white">
                Where can I view my NFTs ? 
              </h3>
              <h4>Once minted, simply connect to your OpenSea account to view your NFTs.</h4>
            </Col>
            <hr className="white"></hr>
          </Row>
          <Row className="mt-5">
            <Col>
              <h3 className="white">
                Where can I view my NFTs ? 
              </h3>
              <h4>Once minted, simply connect to your OpenSea account to view your NFTs.</h4>
            </Col>
            <hr className="white"></hr>
          </Row>
        </Container>
      </Container>

    </main>
  );
}

export default App;
