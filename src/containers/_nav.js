export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/dashboard',
        icon: 'cil-speedometer',
        badge: {
          color: 'primary',
          text: 'Contact & User'
        }
      },
	  {
        _name: 'CSidebarNavDropdown',
        name: 'User Data',
        route: '/userdata',
        icon: 'cil-puzzle',
        items: [
          {
            name: 'List Data',
            to: '/userdata/list'
          }
        ]
      },
	  {
        _name: 'CSidebarNavDropdown',
        name: 'Charts',
        route: '/charts',
        icon: 'cil-chart-pie',
        items: [
          {
            name: 'Chart Bar',
            to: '/charts/chartbar'
          },
		  {
            name: 'Chart Doughnut',
            to: '/charts/chartdoughnut'
          }
		  ,
		  {
            name: 'Chart Line',
            to: '/charts/chartline'
          }
		  ,
		  {
            name: 'Chart Pie',
            to: '/charts/chartpie'
          }
		  ,
		  {
            name: 'Chart Polar',
            to: '/charts/chartpolar'
          }
		  ,
		  {
            name: 'Chart Radar',
            to: '/charts/chartradar'
          }
        ]
      },
      {
        _name: 'CSidebarNavDivider',
        _class: 'm-2'
      }
    ]
  }
]