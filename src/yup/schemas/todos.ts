import * as yup from "yup";

export const todoPOST= yup.object({
    description:yup.string().required(),
    complete:yup.boolean().optional().default(false)
})