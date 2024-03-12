import * as Yup from "yup";

export const blogSchema = Yup.object().shape({
  keywords_seo: Yup.string().required("Seo keywords is a required field"),
  name_post: Yup.string().required("Post name is a required field"),
  content_1: Yup.string().required("Post content 1 is a required field"),
  content_2: Yup.string().required("Post content 2 is a required field"),
  content_3: Yup.string().required("Post content 3 is a required field"),
  robots: Yup.string().required("Robots is a required field"),
  status: Yup.string().required("Status is a required field"),
  is_schedule: Yup.string().required("Is Schedule is a required field"),
  schedule_at: Yup.date().required("Schedule At is a required field"),
  order: Yup.string().required("Order is a required field"),
  video_url: Yup.string().required("Video URL is a required field"),
  category_post: Yup.string().required("Category Post is a required field"),
  seo_name_post: Yup.string()
    .required("SEO title is a required field")
    .max(60, "The title of the seo must be less than 60 characters,"),
  description_post: Yup.string().required(
    "Seo description is a required field"
  ),
  image_post: Yup.string().required("Post Image is a required field"),
  ...Array.from({ length: 6 }, (_, index) => [
    `recommended_blog_${index + 1}`,
    Yup.string()
      .required(`Recommended post ${index + 1} is a required field`)
      .notOneOf(
        Array.from({ length: index }, (_, i) =>
          Yup.ref(`recommended_blog_${i + 1}`)
        ),
        `Recommended post ${index + 1} should be different from previous posts`
      )
  ]).reduce(
    (acc, [fieldName, validation]) => ({ ...acc, [fieldName]: validation }),
    {}
  )
});
export const pageSchema = Yup.object().shape({
  keywords_seo: Yup.string().required("Seo keywords is a required field"),
  name_post: Yup.string().required("Post name is a required field"),
  content_1: Yup.string().required("Post content 1 is a required field"),
  content_2: Yup.string().required("Post content 2 is a required field"),
  content_3: Yup.string().required("Post content 3 is a required field"),
  robots: Yup.string().required("Robots is a required field"),
  status: Yup.string().required("Status is a required field"), 
  seo_name_post: Yup.string()
    .required("SEO title is a required field")
    .max(60, "The title of the seo must be less than 60 characters,"),
  description_post: Yup.string().required(
    "Seo description is a required field"
  ),
  image_post: Yup.string().required("Post Image is a required field"),
 
});
