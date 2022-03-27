import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Apps from "./App";
import deepCopy from "./deepCopy";

import data from "./data";

import "./styles.css";

import monthMap from "./monthMap";

class App extends React.Component {
  constructor(props) {
    super(props);
    var defaultSortBy = "ryears";
    var defaultSortOrder = "asc";
    var sortedItems = this.sortData(defaultSortBy, defaultSortOrder, data.rows);
    this.state = {
      data: {
        ...data,
        rows: sortedItems
      },
      sortBy: defaultSortBy, // default sort column
      sortOrder: defaultSortOrder // default sort oder
    };
  }
  sortData(sortBy, sortOrder, rows) {
    var itemsToSort = deepCopy(rows || this.state.data.rows);
    var sortedItems = [];
    var compareFn = null;
    switch (sortBy) {
      case "ryears":
        compareFn = (i, j) => {
          if (i.ryears < j.ryears) {
            return sortOrder === "asc" ? -1 : 1;
          } else {
            if (i.ryears > j.ryears) {
              return sortOrder === "asc" ? 1 : -1;
            } else {
              return 0;
            }
          }
        };
        break;
      case "bmonth":
        compareFn = (i, j) => {
          var indexOfI = monthMap.indexOf(i.bmonth);
          var indexOfJ = monthMap.indexOf(j.bmonth);
          if (indexOfI < indexOfJ) {
            return sortOrder === "asc" ? -1 : 1;
          } else {
            if (indexOfI > indexOfJ) {
              return sortOrder === "asc" ? 1 : -1;
            } else {
              return 0;
            }
          }
        };
        break;
      default:
        break;
    }
    sortedItems = itemsToSort.sort(compareFn);
    return sortedItems;
  }
  requestSort(pSortBy) {
    var sortBy = this.state.sortBy;
    var sortOrder = this.state.sortOrder;
    return (event) => {
      if (pSortBy === this.state.sortBy) {
        sortOrder = sortOrder === "asc" ? "desc" : "asc";
      } else {
        sortBy = pSortBy;
        sortOrder = "asc";
      }
      var sortedItems = this.sortData(sortBy, sortOrder);
      this.setState({
        sortOrder: sortOrder,
        sortBy: sortBy,
        data: {
          ...this.state.data,
          rows: sortedItems
        }
      });
    };
  }
  render() {
    return (
      <div className="App">
        <Apps
          data={this.state.data}
          requestSort={this.requestSort.bind(this)}
          sortOrder={this.state.sortOrder}
          sortBy={this.state.sortBy}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Apps />
  </BrowserRouter>,
  rootElement
);
