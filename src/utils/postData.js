export const initialValues = {
  name_post: "",
  content_1: "",
  content_2: "",
  content_3: "",
  banner_1: "",
  banner_2: "",
  banner_3: "",
  status: "draft",
  is_schedule: false,
  schedule_at: new Date().toISOString().slice(0, 16),
  order: "",
  author: "",
  category_post: null,
  subcategory_post: null,
  seo_name_post: "",
  description_post: "",
  keywords_seo: "",
  robots: "index, follow",
  image_post: "",
  video_url: "",
  slug: "",
  tags: [],
  explore: [],
  snippet_1_id: null,
  snippet_2_id: null,
  recommended_blog_1: null,
  recommended_blog_2: null,
  recommended_blog_3: null,
  recommended_blog_4: null,
  recommended_blog_5: null,
  recommended_blog_6: null
};
export const initialPageValues = {
  name_post: "",
  content_1: "",
  content_2: "",
  content_3: "", 
  status: "draft", 
  seo_name_post: "",
  description_post: "",
  keywords_seo: "",
  robots: "index, follow",
  image_post: "",
  slug: "", 
  snippet_1_id: null,
  snippet_2_id: null,

};

const valueChack = (value) => (value === 0 ? "" : value);

export const dataPayload = (values, id) => {
  let formPostData = new FormData();
  formPostData.append("title", values.name_post);
  formPostData.append("content_1", values.content_1);
  formPostData.append("content_2", values.content_2);
  formPostData.append("content_3", values.content_3);
  formPostData.append("status", values.status);
  formPostData.append("is_schedule", values.is_schedule);
  formPostData.append("schedule_at", values.schedule_at);
  formPostData.append("order", values.order);
  formPostData.append("author_id", id);
  if (values.category_post)
    formPostData.append("categories_id", values.category_post);
  if (values.subcategory_post)
    formPostData.append("subcategory_id", values.subcategory_post);
  formPostData.append("title_seo", values.seo_name_post);
  formPostData.append("description_seo", values.description_post);
  formPostData.append("keywords_seo", values.keywords_seo);
  formPostData.append("robots", values.robots);
  formPostData.append("video_url", values.video_url);
  if (values.slug == "") {
    let newSlug = generateSlug(values.seo_name_post);
    formPostData.append("slug_seo", newSlug);
  } else {
    formPostData.append("slug_seo", values.slug);
  }
  if (values.snippet_1_id > 0) {
    formPostData.append("snippet_1_id", values.snippet_1_id);
  }

  if (values.snippet_2_id > 0) {
    formPostData.append("snippet_2_id", values.snippet_2_id);
  }
  const imageTypeRegExp = /^image\//;
  if (values?.image_post !== null && imageTypeRegExp.test(values?.image_post?.type)) {
    formPostData.append("featured_image", values?.image_post);
  }
  let bannerFormData = new FormData();
  bannerFormData.append("banner_1", valueChack(Number(values?.banner_1)));
  bannerFormData.append("banner_2", valueChack(Number(values?.banner_2)));
  bannerFormData.append("banner_3", valueChack(Number(values?.banner_3)));

  let tagsFormData = new FormData();
  let resultString = values.tags.map((obj) => obj).join(", ");
  tagsFormData.append("post_tag_id", resultString);
  let authorFormData = new FormData();
  authorFormData.append("fmcsa_author_id", valueChack(Number(values.author)));
  let exploreFormData = new FormData();
if(values?.explore?.length >0){

  let resultExplore = values?.explore.map((obj) => obj).join(", ");

  exploreFormData.append("explore_f_op_id", resultExplore);
}

  let recommendedBlogformData = new FormData();
  let data = [];
  for (let i = 0; i < 6; i++) {
    let payload = values[`recommended_blog_${i + 1}`];
    if (payload && payload !== "0") {
      data?.push(Number(payload));
    }
  }
  recommendedBlogformData.append(`others_post_id`, data);
  return {
    recommendedBlogformData,
    formPostData,
    bannerFormData,
    tagsFormData,
    authorFormData,
    exploreFormData
  };
};
export const BlogDetailData = (data, categoryList, subcategoryList) => {
  const {
    order,
    schedule_at,
    is_schedule,
    updated_at,
    created_at,
    title,
    snippet_1,
    snippet_2,
    snippet_3,
    content_1,
    content_2,
    content_3,
    categories,
    subcategory,
    status
  } = data[0] || {};
  let categorySelected = null;
  let subcategorySelected = null;

  if (categories) {
    categorySelected = categoryList?.find(
      (element) => element.value === categories
    );
    //console.log(categorySelected)
  }
  if (subcategory) {
    subcategorySelected = subcategoryList?.find(
      (element) => element.id === subcategory
    );
  }

  return {
    seoNamePost: data[1]?.title || "N/A",
    descriptionPost: data[1]?.description || "N/A",
    keywordsPost: data[1]?.keywords || "N/A",
    slugPost: data[1]?.slug || "N/A",
    slugUrl: data[1]?.slug ? import.meta.env.VITE_APP_URL + data[1]?.slug : "",
    robots: data[1]?.robots || "N/A",

    title: title || "-",
    status: status || "-",
    order,
    schedule_at,
    is_schedule,
    updated_at,
    created_at,
    category: categorySelected?.label || "-",
    subcategory: subcategorySelected?.name || "-",
    snippet_1: snippet_1?.name || "-",
    snippet_2: snippet_2?.name || "-",
    snippet_3: snippet_3?.name || "-",
    content_1: content_1 || "-",
    content_2: content_2 || "-",
    content_3: content_3 || "-"
  };
};

export const updateData = (
  blogResult,
  banner,
  explore,
  postTag,
  recommendedPost
) => {
  let tags = [];
  let { banner_1, banner_2, banner_3 } = banner[0] || {};
 
  let {
    order,
    featured_image,
    schedule_at,
    is_schedule,
    updated_at,
    created_at,
    title,
    snippet_1,
    snippet_2,
    snippet_3,
    content_1,
    content_2,
    content_3,
    categories,
    subcategory,
    video_url,
    status
  } = blogResult[0] || {};
  let {
    keywords,
    title:seo_name_post,
    description,
    slug,
    robots,
  
  } = blogResult[1] || {};
  let recommended_blog = {};
  for (let index = 0; index < recommendedPost?.length; index++) {
    const element = recommendedPost[index];
    recommended_blog[`recommended_blog_${index + 1}`] = element?.others_post_id;
  }

  tags = postTag.map((item) => item?.post_tag_id || "");
  console.log(video_url, "snippet_1");

  return {
    slug,
    robots,
    seo_name_post,
    description_post:description,
    keywords_seo: keywords,
    image_post: featured_image,
    order,
    video_url,
    schedule_at,
    is_schedule,
    updated_at,
    created_at,
    name_post:title,
    snippet_1_id:snippet_1?.id,
    snippet_2_id:snippet_2?.id,
    snippet_3_id:snippet_3?.id,
    content_1,
    content_2,
    content_3,
    category_post:categories,
    subcategory_post:subcategory,
    status,
    tags,
    ...recommended_blog,
    banner_1,
    banner_2,
    banner_3
  };
};


export   const generateSlug = (strings) => {
  //Generate slug automatic to input SEO Title
  var newSlugGenerate = "";
  const generatedArray = strings.replace(/[^\w\s]/gi, "").toLowerCase();
  generatedArray.split(" ").map((string, i) => {
    if (i == 0 && string == "") {
      newSlugGenerate += `${string}`;
    }
    if (i > 0 && string != "") {
      if (generatedArray.split(" ")[i - 1] == "") {
        return (newSlugGenerate += `${string}`);
      }
      newSlugGenerate += `-${string}`;
    }
    if (i == 0) {
      newSlugGenerate += `${string}`;
    }
  });

  return newSlugGenerate;
};