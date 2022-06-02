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
      <ul>
        {tabs.map((tab) => (
          <li>
            <a href={tab.url}>{tab.header}</a>
            <ul className="subnav">
              {tab.subtabs.map((subtab) => (
                <li>
                  <p>{subtab.header}</p>
                  <p>{subtab.description}</p>
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