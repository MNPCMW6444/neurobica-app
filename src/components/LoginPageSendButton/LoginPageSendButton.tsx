import Button from "@mui/material/Button";

export default function LoginPageSendButton(props: {
  isAllowedToSignIn: boolean;
  emailSetter: Function;
  passwordSetter: Function;
}) {
  return (
    <div>
      <Button
        disabled={!props.isAllowedToSignIn}
        color="inherit"
        variant="outlined"
        href="../../my-account/auth"
        sx={{
          color: "#FF8B17",
          width: "45vh",
          height: "6vh",
          borderRadius: "30px",
        }}
      >
        Login
      </Button>
    </div>
  );
}
