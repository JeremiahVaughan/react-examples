import Link from "../link/link";

// Used for navigation
function SideBar() {
  const links = [
    { label: 'Misc', path: '/misc' },
    { label: 'Dropdown', path: '/' },
    { label: 'Accordion', path: '/accordion' },
    { label: 'Button', path: '/button' },
    { label: 'Modal', path: '/modal' },
    { label: 'Table', path: '/table' },
    { label: 'Counter', path: '/counter' },
    { label: 'Cars', path: '/cars' },
    { label: 'Media', path: '/media' },
  ];
  const renderedLinks = links.map(link => {
    return (
      <div key={link.label}>
        <Link to={link.path}>{link.label}</Link>
      </div>
    )
  })

  return (
    <div className="links">
      {renderedLinks}
    </div>
  )
}

export default SideBar;
