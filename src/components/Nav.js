const Nav = () => {
  let count = 0;
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

  function PotentialSubtabs(props) {
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

  const displaySubnav = (e) => {
    try {
      const tabId = e.target.id;
      const finalNumbers = tabId.match(/\d+/)[0];
      const subnavId = `subnav-${finalNumbers}`;
      const subnav = document.getElementById(subnavId);
      if (subnav.classList.contains("hidden")) {
        subnav.classList.toggle("hidden");
      }
    }
    catch {
      console.log("something bad happened");
    }
  }

  return (
    <nav data-testid="navbar">
      <ul className="nav-tabs">
        {tabs.map((tab) => {
          const tabCount = count;
          const tabId = `tab-${tabCount}`;
          count = count + 1;
          return (
            <li className="tab-and-subnav">
              <div
                data-testid={tabId}
                id={tabId}
                className="hover-context"
                onMouseOver={displaySubnav}
              >
                <a href={tab.url}>{tab.header}</a>
              </div>
              <PotentialSubtabs tabCount={tabCount} tab={tab} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
