function stringify(list) 
{
  let result = ''
  // Write your code here
  if (list && list.data !== null)
  {
    while(list.next)
    {
      result += `${list.data} -> `
      list = list.next
    }
    return result += `${list.data} -> null`
  }
  return 'null'
}