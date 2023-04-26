const Footer = (props) => {
  return (
    <div className="mainapp-footer">
      <div className="mainapp-footer-icons">
        <div>😎</div> <p>You're amazing!</p>
      </div>
      <div onClick={props.handleEditState} className="mainapp-footer-createbtn">
        📝
      </div>
    </div>
  );
};

export default Footer;
