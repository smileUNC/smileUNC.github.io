import { useDocumentTitle } from "../../../utils/useDocumentTitle";
import EfwiText from "./efwi.home.text";

export default function EFWIHome() {
  useDocumentTitle("E^FWI");
  return <EfwiText />;
}
