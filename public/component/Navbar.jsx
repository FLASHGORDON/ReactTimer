var React = require('react');
var {Link} = require('react-router');
var Navbar = React.createClass({
  render:function(){
    return(
      <div>
        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="dropdown menu" data-dropdown-menu>
              <li className="menu-text"><Link to="/">React Timer</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/examples">Examples</Link></li>
            </ul>
          </div>
          <div className="top-bar-right">
            <ul className="menu">
              <li className="menu-text">Created By<a href="https://github.com/FLASHGORDON"><strong>Aashish Sharma</strong></a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Navbar;
