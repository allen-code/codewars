var React = require("react");

function createElement(content, tag, props) 
{
  // create a react element here
  let _tag = tag || 'div'
  content = content || 'Hello world!'
  return React.createElement(_tag, props, content)
}

function createUnorderedList(list) 
{ 
  // create a react unordered list with children list items created form the list argument
  
  list = list.map((el, index) => 
  {
    return createElement(el, { key: index }, 'li')
  })
  
  return createElement(list, 'ul')
}