import {
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import {} from "@heroicons/react/24/solid";

export function ViewPDF({ open, close, pdfUrl }) {
  return (
    <Dialog open={open} size={"xl"} handler={close}>
      <div className="flex flex-col p-2">
        <Button
          variant="gradient"
          color="black"
          onClick={() => close()}
          className="self-end rounded-full"
        >
          <span className="text-xl">X</span>
        </Button>
      </div>
      <DialogBody className="h-[70vh]">
        <iframe src={pdfUrl} frameborder="0" className="w-full h-full"></iframe>
      </DialogBody>
    </Dialog>
  );
}
