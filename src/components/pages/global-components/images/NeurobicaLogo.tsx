import lneurobicaLogo from "../../../../assets/Logo PNG.png"

export default function NeurobicaLogo(props: { zoom: string }) {
  return (
    <>
    <br></br>
    <div
      className="neurobicaLogo"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "3%"
        
      }}
    >
      <img
        src={lneurobicaLogo}
        style={{ width: props.zoom }}
      />
    </div>
    </>
  );
}
