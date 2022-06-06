import { useRef } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  let count = 0;
  const moreTabs = [
    {
      header: "Contact sales",
    },
    {
      header: "Sign in",
    },
  ]
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
          <a href={tab.url}>{tab.header}</a>
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

  function PotentialSubnav(props) {
    let { tabCount, tab } = props;
    const tabHasSubtabs = "subtabs" in tab;

    if (tabHasSubtabs) {
      const subnavId = `subnav-${tabCount}`;
      const subtabsHaveSegments = tab.subtabs.some(
        (subtab) => "segment" in subtab
      );

      const segments = tab.subtabs.reduce((array, subtab) => {
        if (!array.includes(subtab.segment)) {
          array.push(subtab.segment);
        }
        return array;
      }, []);

      function SegmentSubnav(props) {
        const { segment } = props;
        const segmentSubtabs = tab.subtabs.filter(
          (subtab) => subtab.segment === segment
        )
        return (
          <ul>
            {segmentSubtabs.map((subtab) => (
              <li>
                <div className="hover-context">
                  <p className="subtab-header">{subtab.header}</p>
                  <p className="subtab-description">{subtab.description}</p>
                </div>
              </li>
            ))}
          </ul>
        );
      }

      if (subtabsHaveSegments) {
        return (
          <ul
            data-testid={subnavId}
            id={subnavId}
            className="subnav, hidden"
          >
            <div className="segments-container">
              {segments.map((segment) => (
                <div className="segment-container">
                  <li className="segment-header">{segment}</li>
                  <SegmentSubnav segment={segment} />
                </div>
              ))}
            </div>
          </ul>
        );
      } else {
        return (
          <ul id={subnavId} className="subnav, hidden" data-testid={subnavId}>
            {tab.subtabs.map((subtab) => (
              <li>
                <div className="hover-context">
                  <p className="subtab-header">{subtab.header}</p>
                  <p className="subtab-description">{subtab.description}</p>
                </div>
              </li>
            ))}
          </ul>
        );
      }
    }
  }

  return (
    <nav data-testid="navbar">
      <Link to="/">
        <svg
          width="87"
          height="30"
          viewBox="0 0 87 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.805 1.294l16.6-1.226c2.039-.175 2.563-.057 3.845.875l5.299 3.733c.874.642 1.165.817 1.165 1.516v20.473c0 1.283-.466 2.042-2.097 2.158L7.34 29.99c-1.224.058-1.807-.117-2.448-.934L.99 23.982c-.7-.934-.99-1.633-.99-2.45V3.334c0-1.049.466-1.924 1.805-2.04z"
            fill="#fff"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.405.068l-16.6 1.226C.466 1.41 0 2.285 0 3.334v18.198c0 .817.29 1.516.99 2.45l3.902 5.074c.641.817 1.224.992 2.448.934l19.277-1.167c1.63-.116 2.097-.875 2.097-2.158V6.192c0-.663-.262-.854-1.033-1.42a85.473 85.473 0 01-.133-.096L22.25.943c-1.282-.932-1.806-1.05-3.845-.875zM7.776 5.857c-1.574.106-1.931.13-2.825-.597L2.678 3.452c-.231-.234-.115-.526.467-.584l15.958-1.166c1.34-.117 2.038.35 2.562.758l2.737 1.983c.117.059.408.408.058.408l-16.48.992-.204.014zM5.941 26.49V9.11c0-.759.233-1.109.931-1.168L25.8 6.834c.642-.058.932.35.932 1.108v17.264c0 .759-.117 1.401-1.165 1.459l-18.113 1.05c-1.048.058-1.513-.291-1.513-1.225zm17.88-16.448c.116.525 0 1.05-.525 1.11l-.873.173v12.832c-.758.408-1.456.641-2.039.641-.932 0-1.165-.292-1.863-1.166l-5.709-8.982v8.69l1.806.409s0 1.05-1.457 1.05l-4.017.233c-.117-.234 0-.817.407-.933l1.049-.291v-11.49L9.144 12.2c-.117-.525.174-1.283.99-1.342l4.31-.29 5.94 9.098v-8.049l-1.514-.174c-.117-.643.349-1.11.931-1.167l4.02-.234z"
            fill="#000"
          ></path>
          <path
            d="M41.434 21.251v-7.91h.137l5.704 7.91h1.796V9.627h-1.997v7.902h-.137l-5.704-7.902H39.43V21.25h2.005zM54.715 21.429c2.635 0 4.238-1.724 4.238-4.584 0-2.852-1.611-4.584-4.238-4.584-2.618 0-4.237 1.74-4.237 4.584 0 2.86 1.595 4.584 4.237 4.584zm0-1.676c-1.393 0-2.19-1.063-2.19-2.908 0-1.837.797-2.908 2.19-2.908 1.386 0 2.183 1.071 2.183 2.908 0 1.845-.789 2.908-2.183 2.908zM60.778 10.28v2.215h-1.393v1.595h1.393v4.809c0 1.708.806 2.393 2.828 2.393.386 0 .757-.04 1.047-.097v-1.563c-.242.024-.395.04-.677.04-.837 0-1.208-.386-1.208-1.256V14.09h1.885v-1.595h-1.885v-2.216h-1.99zM65.85 21.251h1.99v-8.813h-1.99v8.813zm.991-10.27c.66 0 1.192-.533 1.192-1.201 0-.669-.531-1.209-1.192-1.209-.652 0-1.192.54-1.192 1.209 0 .668.54 1.2 1.192 1.2zM73.299 21.429c2.634 0 4.237-1.724 4.237-4.584 0-2.852-1.611-4.584-4.237-4.584-2.619 0-4.238 1.74-4.238 4.584 0 2.86 1.595 4.584 4.238 4.584zm0-1.676c-1.394 0-2.192-1.063-2.192-2.908 0-1.837.798-2.908 2.192-2.908 1.385 0 2.183 1.071 2.183 2.908 0 1.845-.79 2.908-2.183 2.908zM78.725 21.251h1.998V16.12c0-1.297.75-2.119 1.941-2.119 1.217 0 1.78.677 1.78 2.022v5.228h1.999v-5.703c0-2.103-1.072-3.287-3.037-3.287-1.314 0-2.2.604-2.619 1.587h-.137v-1.41h-1.925v8.813z"
            fill="#000"
          ></path>
        </svg>
      </Link>
      <div class="navbar-tabs">
        <ul className="nav-tabs">
          {tabs.map((tab) => {
            const tabCount = count;
            const tabId = `tab-${tabCount}`;
            count = count + 1;
            return (
              <li className="tab-and-subnav" onMouseLeave={hideSubnav}>
                <Tab tab={tab} tabId={tabId} />
                <PotentialSubnav tabCount={tabCount} tab={tab} />
              </li>
            );
          })}
        </ul>
        <div className="login-options">
          <ul className="nav-tabs">
            {moreTabs.map((tab) => {
              const tabCount = count;
              const tabId = `tab-${tabCount}`;
              count = count + 1;
              return (
                <li>
                  <Tab tab={tab} tabId={tabId} />
                </li>
              );
            })}
          </ul>
          <Link to="signup">
            <button type="button" className="try-notion">Try Notion free</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
