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
            didSelect: (sender, indexPath, _data) => {
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
  loadingOnItemClick() {
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
            didSelect: (sender, indexPath, _data) => {
              const section = indexPath.section;
              const row = indexPath.row;
              $console.info({
                section,
                row
              });
              sender.cell(indexPath).startLoading({
                color: $color("#FF0000")
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
