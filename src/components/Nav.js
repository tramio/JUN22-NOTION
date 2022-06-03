const Nav = () => {
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
    const { tab } = props;
    const tabHasSubtabs = "subtabs" in tab;

    if (tabHasSubtabs) {
      const subtabsHaveSegments = tab.subtabs.some(
        (subtab) => "segment" in subtab
      );

      const segments = tab.subtabs.reduce((array, subtab) => {
        if (!array.includes(subtab.segment)) {
          array.push(subtab.segment);
        }
        return array;
      }, []);

      function SegmentSubmenu(props) {
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
          <ul className="subnav">
            {segments.map((segment) => (
              <div>
                <li className="segment-header">{segment}</li>
                <SegmentSubmenu segment={segment} />
              </div>
            ))}
          </ul>
        );
      } else {
        return (
          <ul className="subnav">
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
      <ul className="nav-tabs">
        {tabs.map((tab) => (
          <li>
            <div className="hover-context">
              <a href={tab.url}>{tab.header}</a>
            </div>
            <PotentialSubtabs tab={tab} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
