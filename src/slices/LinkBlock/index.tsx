import Button from "@/components/Button";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `LinkBlock`.
 */
export type LinkBlockProps = SliceComponentProps<Content.LinkBlockSlice>;

/**
 * Component for "LinkBlock" Slices.
 */
const LinkBlock = ({ slice }: LinkBlockProps): JSX.Element => {
  return (
    <
      // data-slice-type={slice.slice_type}
      // data-slice-variation={slice.variation}
    >
      <div className="flex gap-5 mt-0 ml-10 w-full">
     <Button linkField={slice.primary.livelink} label={"Live"} className="mt-0 px-6"></Button>
     <Button linkField={slice.primary.codelink} label={"Code"} className="mt-0 px-6"></Button>
     </div>
    </>
  );
};

export default LinkBlock;
