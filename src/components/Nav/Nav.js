import { useRef } from "react";
import { Link } from "react-router-dom";
import NotionLogo from "./utils/NotionLogo";
import PotentialSubnav from "./utils/PotentialSubnav";
import uniqid from "uniqid";

const Nav = () => {
  let count = 0;
  const moreTabs = [
    {
      header: "Contact sales",
    },
    {
      header: "Sign in",
    },
  ];
  const tabs = [
    {
      header: "Product",
      subtabs: [
        {
          header: "Home",
          description: "Docs, projects, & wikis",
        },
        {
          header: "Template gallery",
          description: "Setups to get you started",
        },
        {
          header: "Customer stories",
          description: "See how teams use Notion",
        },
        {
          header: "Integrations",
          description: "Connect your tools to Notion",
        },
      ],
    },
    {
      header: "Download",
      url: "",
      subtabs: [
        {
          header: "iOS & Android",
        },
        {
          header: "Mac & Windows",
        },
        {
          header: "Web Clipper",
        },
      ],
    },
    {
      header: "Solutions",
      url: "",
      subtabs: [
        {
          header: "Enterprise",
          description: "Advanced features for your org",
          segment: "By team size",
        },
        {
          header: "Small business",
          description: "Run your team on one tool",
          segment: "By team size",
        },
        {
          header: "Personal",
          description: "Free for individuals",
          segment: "By team size",
        },
        {
          header: "Design",
          segment: "By team function",
        },
        {
          header: "Engineering",
          segment: "By team function",
        },
        {
          header: "Product",
          segment: "By team function",
        },
        {
          header: "Managers",
          segment: "By team function",
        },
        {
          header: "Startups",
          segment: "Notion for",
        },
        {
          header: "Remote work",
          segment: "Notion for",
        },
        {
          header: "Education",
          segment: "Notion for",
        },
        {
          header: "Nonprofits",
          segment: "Notion for",
        },
      ],
    },
    {
      header: "Resources",
      url: "",
      subtabs: [
        {
          header: "Blog",
        },
        {
          header: "Guides & Tutorials",
        },
        {
          header: "Webinars",
        },
        {
          header: "Help center",
        },
        {
          header: "API docs",
        },
        {
          header: "Community",
        },
      ],
    },
    {
      header: "Pricing",
      url: "",
    },
  ];

  const tabId = useRef("");

  const getSubnav = (e) => {
    tabId.current = e.currentTarget.id;
    let finalNumbers = tabId.current.match(/[0-9]/)[0];
    const subnavId = `subnav-${finalNumbers}`;
    const subnav = document.getElementById(subnavId);
    return subnav;
  };

  const currentlyDisplayedSubnav = useRef();

  const displaySubnav = (e) => {
    const subnav = getSubnav(e);
    if (subnav.classList.contains("hidden")) {
      subnav.classList.toggle("hidden");
    }
    currentlyDisplayedSubnav.current = subnav;
  };

  const hideSubnav = () => {
    const subnav = currentlyDisplayedSubnav.current;
    if (!subnav.classList.contains("hidden")) {
      subnav.classList.toggle("hidden");
    }
  };

  const Tab = (props) => {
    const { tab, tabId } = props;
    const tabHasSubtabs = "subtabs" in tab;

    if (tabHasSubtabs) {
      return (
        <div
          data-testid={tabId}
          id={tabId}
          className="hover-context"
          onMouseOver={displaySubnav}
        >
          <a className="tab-link" href={tab.url}>{tab.header}</a>
        </div>
      );
    } else {
      return (
        <div data-testid={tabId} id={tabId} className="hover-context">
          <a href={tab.url}>{tab.header}</a>
        </div>
      );
    }
  };

  return (
    <nav data-testid="navbar">
      <div class="nav-inner">
        <NotionLogo />
        <div className="desktop-actions">
          <div class="nav-left">
            <ul className="nav-tabs">
              {tabs.map((tab) => {
                const tabCount = count;
                const tabId = `tab-${tabCount}`;
                const key = uniqid();
                count = count + 1;
                return (
                  <li key={key} className="tab-and-subnav" onMouseLeave={hideSubnav}>
                    <Tab tab={tab} tabId={tabId} />
                    <PotentialSubnav tabCount={tabCount} tab={tab} />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="nav-right">
            <ul className="nav-tabs">
              {moreTabs.map((tab) => {
                const tabCount = count;
                const tabId = `tab-${tabCount}`;
                const key = uniqid();
                count = count + 1;
                return (
                  <li key={key}>
                    <Tab tab={tab} tabId={tabId} />
                  </li>
                );
              })}
            </ul>
            <div class="cta-item">
              <Link to="signup">
                <button type="button" className="try-notion">
                  Try Notion free
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;