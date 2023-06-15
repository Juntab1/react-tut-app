// used 'rafce' to summon boilerplate code
interface Props {
    children: string
    // "?" means optional
    // can only set it to one of the ones listed
    color?: 'primary' | 'secondary' | 'danger';
    onClick: () => void;
}

const Buttons = ({children, onClick, color = 'primary'}: Props) => {
  return (
    <button className={'btn btn-' + color} onClick={onClick}>{children}</button>
  )
}

export default Buttons