import * as Yup from "yup";

export const initialValues = {
  title: "",
  content: "",
  button_text: "",
  button_url: ""
};

export const schema = Yup.object().shape({
  title: Yup.string().required("Title is a required field"),
  content: Yup.string().required("Content is a required field"),
  button_text: Yup.string().required("Button text is a required field"),
  button_url: Yup.string().required("Button url is a required field")
});


export const tagInitialValues = {
  tag_url: "",
  tag_texts: "",
 
};

export const tagSchema = Yup.object().shape({
  tag_texts: Yup.string().required("Tag texts is a required field"),
  tag_url: Yup.string().required("Tag url is a required field"),
 
});



export const exploreInitialValues = {
  explore_f_op_name: "",
  explore_f_op_url: "",
 
};

export const exploreSchema = Yup.object().shape({
  explore_f_op_name: Yup.string().required("Explore name is a required field"),
  explore_f_op_url: Yup.string().required("Explore url is a required field"),
 
});
export const snippetInitialValues = {
  name:'',
  category:'',
  content:''
 
};



export const snippetSchema = Yup.object().shape({
  name: Yup.string().required("Snippet name is a required field"),
  category: Yup.string().required("Explore url is a required field"),
  content: Yup.string().required("Explore url is a required field"),
 
});
export const authorInitialValues = {
  author_name: "",
  info: "",
 
};

export const authorSchema = Yup.object().shape({
  author_name: Yup.string().required("Author name is a required field"),
  info: Yup.string().required("Author info is a required field"),
 
});
