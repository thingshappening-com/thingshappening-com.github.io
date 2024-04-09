---
  title: "Setting defaultProps and propTypes in a functional vs a class component"
  description: "How to set defaultProps and propTypes in a functional vs a class component"
  slug: 'how-to-set-defaultprops-and-proptypes-in-a-functional-vs-a-class-component'
  tags: ["react"]
  pubDate: "2022-01-11"
  layout: "../layouts/BlogPostLayout.astro"
---

When defining our React components, if those components receive props then we need to declare what type of data those props are going to exist as and also give them default values when relevant. This will be different depending on if the component you are building is a functional or a class based component.

<h3>Class component propTypes and defaultProps</h3>
In a class based component the defaultProps and propTypes will be set within the the component itself:

```javascript
export default class Header extends Component {
  static propTypes = {
    // data definition
  }
  static defaultProps = {
    // default data
  }
}
```

<h3>Functional component propTypes and defaultProps</h3>
In a functional component the propTypes and defaultProps will be set on the function outside of the function definition.

```javascript
function Header({...props}) {
  return (
    <>
  )
}

Header.propTypes = {
  // data definition
};
Header.defaultProps = {
  // default data
};

export default Header;
```

Are you also interested in learning how to set state based on the value of a URL in React? If so it's [your lucky day](https://tinytechtuts.com/2021-how-to-set-state-from-url-in-react/). If not, [space ham](https://giphy.com/gifs/space-ham-juDuRdAjXoH9m).