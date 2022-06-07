import homepageImage from './assets/homepage-image.png';
import curologyLogo from './assets/logos/curology.png';
import mixpanelLogo from './assets/logos/mixpanel.png';
import matchgroupLogo from './assets/logos/matchgroup.png';
import headspaceLogo from './assets/logos/headspace.png';

const Homepage = () => {
  const logos = [curologyLogo, mixpanelLogo, matchgroupLogo, headspaceLogo];

  return (
    <div className="welcome-container">
      <div className="welcome-first-half">
        <h1 className="homepage-main-title">One workspace. Every team.</h1>
        <h2 className="homepage-subtitle">
          We’re more than a doc. Or a table. Customize Notion to work the way
          you do.
        </h2>
        <button className="homepage-try-notion">Try Notion free</button>
        <div class="trusted-by">
          <p className="small-header">Trusted by teams at</p>
          <ul className="trusted-by-logos-container">
            {logos.map((logo) => {
              return (
                <li className="trusted-by-logo-container">
                  <img className="trusted-by-logo" src={logo} alt=""></img>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <img
        className="welcome-second-half"
        src={homepageImage}
        alt="Collaborating coworkers"
      ></img>
    </div>
  );
};

export default Homepage;
