interface Props {
  onSubmitValues: () => void;
}

const AddUserButton = (props: Props) => {
  return (
    <button
      type="submit"
      className="btn btn-primary"
      onClick={props.onSubmitValues}
    >
      Add User
    </button>
  );
};

export default AddUserButton;
