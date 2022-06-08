import uniqid from 'uniqid';

const SegmentSubnav = (props) => {
  const { segment, tab } = props;
  const segmentSubtabs = tab.subtabs.filter(
    (subtab) => subtab.segment === segment
  );
  return (
    <ul>
      {segmentSubtabs.map((subtab) => {
        const key = uniqid();
        return (
          <li key={key}>
            <div className="hover-context">
              <p className="subtab-header">{subtab.header}</p>
              <p className="subtab-description">{subtab.description}</p>
            </div>
          </li>
        )
      })}
    </ul>
  );
};

const SubnavWithSegments = (props) => {
  const { subnavId, segments, tab } = props;
  return (
    <ul data-testid={subnavId} id={subnavId} className="subnav, hidden">
      <div className="segments-container">
        {segments.map((segment) => {
          const key = uniqid();
          return (
            <div key={key} className="segment-container">
              <li className="segment-header">{segment}</li>
              <SegmentSubnav segment={segment} tab={tab} />
            </div>
          )
        })}
      </div>
    </ul>
  );
};

const SubnavWithoutSegments = (props) => {
  const { subnavId, tab } = props;
  return (
    <ul id={subnavId} className="subnav, hidden" data-testid={subnavId}>
      {tab.subtabs.map((subtab) => {
        const key = uniqid();
        return (
          <li key={key}>
            <div className="hover-context">
              <p className="subtab-header">{subtab.header}</p>
              <p className="subtab-description">{subtab.description}</p>
            </div>
          </li>
        )
      })}
    </ul>
  );
};

const PotentialSubnav = (props) => {
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

    if (subtabsHaveSegments) {
      return (
        <SubnavWithSegments
          subnavId={subnavId}
          tab={tab}
          segments={segments}
        />
      )
    } else {
      return (
        <SubnavWithoutSegments
          subnavId={subnavId}
          tab={tab}
        />
      )
    }
  }
};

export default PotentialSubnav;
