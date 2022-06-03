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
          description: "See how teams use Notion"
        },
        {
          header: "Integrations",
          description: "Connect your tools to Notion"
        }
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
      subtabs: [{
      header: "Enterprise",
      description: "Advanced features for your org",
    }, {
      header: "Small business",
      description: "Run your team on one tool",
    },
  {
    header: "Personal",
    description: "Free for individuals",
  }] },
    { header: "Resources", url: "", subtabs: [{
      header: "Blog",
    },
  {header: "Guides & Tutorials"},
{header: "Webinars"},
{header: "Help center"},
{header: "API docs"},
{header: "Community"}]},
    // { header: "Pricing", url: "" },
  ];

  return (
    <nav data-testid="navbar">
      <ul className="nav-tabs">
        {tabs.map((tab) => (
          <li>
            <div className="hover-context">
              <a href={tab.url}>{tab.header}</a>
            </div>
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
          </li>
        ))}
      </ul>
    </nav>
  );
}
  
export default Nav;