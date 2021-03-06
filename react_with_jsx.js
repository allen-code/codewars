let React = require('react')

// let us know who your three favorite codewarriors are!
// mantain this format, but choose any three users you want:
const myHeader = <h1>My three favorite codewarriors are noLan, jhoffner and OverZealous</h1>
// var myHeader; 

var CodewarsLink = React.createClass({
  render: function() {
    return <a href={'http://www.codewars.com/users/' + this.props.user}>{this.props.user}</a>
  }
});

var Leaderboard = React.createClass({
  render: function() {
    return <div>
    {
      this.props.leaders.map((leader, index) =>
      {
        return <CodewarsLink user={leader} key={index} />
      })}
    </div>
  }
})