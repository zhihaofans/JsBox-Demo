class StringList {
  constructor(name) {
    this.NAME = name;
  }
  pushSingleSectionRowHeight({ id, title, data }) {
    $ui.push({
      props: {
        title: title
      },
      views: [
        {
          type: "list",
          props: {
            id,
            data
          },
          layout: $layout.fill,
          events: {
            didSelect: (_sender, indexPath, _data) => {
              const section = indexPath.section;
              const row = indexPath.row;
              $console.info({
                section,
                row
              });
            }
          }
        }
      ]
    });
  }
}
module.exports = {
  StringList
};
