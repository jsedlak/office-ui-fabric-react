// tslint:disable:no-any
import * as React from 'react';
import { App as AppBase, IAppDefinition, IAppProps } from '@uifabric/example-app-base';

export const AppDefinition: IAppDefinition = {
  appTitle: 'Fabric - React',

  testPages: [],
  examplePages: [
    {
      links: [
        {
          component: require<any>('../components/LineChart/LineChartPage').LineChartPage,
          key: 'LineChart',
          name: 'LineChart',
          url: '#/examples/linechart'
        },
        {
          component: require<any>('../components/VerticalBarChart/VerticalBarChartPage').VerticalBarChartPage,
          key: 'VerticalBarChart',
          name: 'VerticalBarChart',
          url: '#/examples/verticalbarchart'
        },
        {
          component: require<any>('../components/HorizontalBarChart/HorizontalBarChartPage').HorizontalBarChartPage,
          key: 'HorizontalBarChart',
          name: 'HorizontalBarChart',
          url: '#/examples/horizontalbarchart'
        },
        {
          component: require<any>('../components/PieChart/PieChartPage').PieChartPage,
          key: 'PieChart',
          name: 'PieChart',
          url: '#/examples/piechart'
        },
        {
          component: require<any>('../components/DonutChart/DonutChartPage').DonutChartPage,
          key: 'DonutChart',
          name: 'DonutChart',
          url: '#/examples/Donutchart'
        },
        {
          component: require<any>('../components/Legends/LegendsPage').LegendsPage,
          key: 'Legends',
          name: 'Legends',
          url: '#/examples/Legends'
        },
        {
          component: require<any>('../components/StackedBarChart/StackedBarChartPage').StackedBarChartPage,
          key: 'StackedBarChart',
          name: 'StackedBarChart',
          url: '#/examples/stackedbarchart'
        }
      ]
    }
  ],
  headerLinks: [
    {
      name: 'Getting started',
      url: '#/'
    },
    {
      name: 'Fabric',
      url: 'http://dev.office.com/fabric'
    },
    {
      name: 'Github',
      url: 'http://www.github.com/officedev'
    }
  ]
};

export const App = (props: IAppProps) => <AppBase appDefinition={AppDefinition} {...props} />;
