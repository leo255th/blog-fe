export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

/** 请求的结果 */
export type Result = {
  __typename?: 'Result';
  /** 结果 */
  done: Scalars['Boolean'];
  /** 错误信息 */
  errMsg?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  /** 用户ID */
  userId: Scalars['Int'];
  /** 测试属性 */
  userName?: Maybe<Scalars['String']>;
};

export type LoginRes = {
  __typename?: 'LoginRes';
  /** 登陆结果 */
  res: Result;
  /** 登陆成功后返回用户信息 */
  user?: Maybe<User>;
};

export type RegisterRes = {
  __typename?: 'RegisterRes';
  /** 注册结果 */
  res: Result;
  /** 注册成功后返回用户信息 */
  user?: Maybe<User>;
};

export type ArticleEntity = {
  __typename?: 'ArticleEntity';
  /** 文章的id */
  id: Scalars['Int'];
  /** 作者的id */
  userId: Scalars['Int'];
  /** 文章的标题 */
  title: Scalars['String'];
  /** 文章的内容（富文本） */
  content: Scalars['String'];
  /** 文章的领域 */
  field: Scalars['String'];
  /** 文章点赞数 */
  likeNum: Scalars['Int'];
  /** 创建时间 */
  createdAt: Scalars['DateTime'];
  /** 最后修改时间 */
  updatedAt: Scalars['DateTime'];
  /** 是否删除 */
  isDeleted: Scalars['Boolean'];
};


export type FieldEntity = {
  __typename?: 'FieldEntity';
  /** id */
  id: Scalars['Int'];
  /** 领域 */
  field: Scalars['String'];
};

export type Article = {
  __typename?: 'Article';
  /** 文章ID */
  articleId: Scalars['Int'];
  /** 文章详情 */
  data: ArticleEntity;
};

export type AddArticleRes = {
  __typename?: 'AddArticleRes';
  /** 结果 */
  res: Result;
  /** 文章 */
  article?: Maybe<Article>;
};

export type EditArticleRes = {
  __typename?: 'EditArticleRes';
  /** 结果 */
  res: Result;
  /** 文章 */
  article?: Maybe<Article>;
};

export type ArticleList = {
  __typename?: 'ArticleList';
  /** 文章列表 */
  list?: Maybe<Array<Maybe<ArticleEntity>>>;
  /** 总数 */
  total?: Maybe<Scalars['Int']>;
};

export type CommentEntity = {
  __typename?: 'CommentEntity';
  /** 评论的id */
  id: Scalars['Int'];
  /** 评论类型 */
  commentType: CommentType;
  /** 被评论的用户的id */
  commentedUserId?: Maybe<Scalars['Int']>;
  /** 被评论的评论的id */
  commentedCommentId?: Maybe<Scalars['Int']>;
  /** 根评论下一级评论的id */
  commentedParentCommentId?: Maybe<Scalars['Int']>;
  /** 被评论的文章的id */
  commentedArticleId?: Maybe<Scalars['Int']>;
  /** 评论人用户名 */
  userName: Scalars['String'];
  /** 评论人用户ID */
  userId: Scalars['Int'];
  /** 评论内容 */
  content: Scalars['String'];
  /** 创建时间 */
  createdAt: Scalars['DateTime'];
  /** 最后修改时间 */
  updatedAt: Scalars['DateTime'];
  /** 是否删除 */
  isDeleted: Scalars['Boolean'];
};

/** 评论的类型 */
export enum CommentType {
  User = 'USER',
  Article = 'ARTICLE',
  Comment = 'COMMENT'
}

export type Comment = {
  __typename?: 'Comment';
  /** 评论ID */
  commentId: Scalars['Int'];
};

export type AddCommentRes = {
  __typename?: 'AddCommentRes';
  /** 结果 */
  res: Result;
  /** 评论 */
  comment?: Maybe<Comment>;
};

export type CommentList = {
  __typename?: 'CommentList';
  /** 评论列表 */
  list?: Maybe<Array<Maybe<CommentEntity>>>;
  /** 总数 */
  total?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  user: User;
  article: Article;
  fields: Array<FieldEntity>;
  /** 文章列表 */
  articles?: Maybe<ArticleList>;
  comment: Comment;
  comments: CommentList;
};


export type QueryUserArgs = {
  userId: Scalars['Int'];
};


export type QueryArticleArgs = {
  articleId: Scalars['Int'];
};


export type QueryArticlesArgs = {
  input: ArticlesFilterInput;
};


export type QueryCommentArgs = {
  commentId: Scalars['Int'];
};


export type QueryCommentsArgs = {
  toUser?: Maybe<Comment2UserGetInput>;
  toArticle?: Maybe<Comment2ArticleGetInput>;
  toComment?: Maybe<Comment2CommentGetInput>;
};

/** 搜索选项 */
export type ArticlesFilterInput = {
  /** 作者ID */
  equal_userId?: Maybe<Scalars['Int']>;
  /** 领域 */
  equal_field?: Maybe<Scalars['String']>;
  /** 最早发布时间 */
  min_createdAt?: Maybe<Scalars['DateTime']>;
  /** 最晚发布时间 */
  max_createdAt?: Maybe<Scalars['DateTime']>;
  /** 文章标签 */
  in_tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** 偏移量 */
  offset?: Maybe<Scalars['Int']>;
  /** 数量 */
  num?: Maybe<Scalars['Int']>;
};

export type Comment2UserGetInput = {
  /** 被评论的用户的id */
  commentedUserId: Scalars['Int'];
  /** 偏移量 */
  offset?: Maybe<Scalars['Int']>;
  /** 数量 */
  num?: Maybe<Scalars['Int']>;
};

export type Comment2ArticleGetInput = {
  /** 被评论的文章的id */
  commentedArticleId: Scalars['Int'];
  /** 偏移量 */
  offset?: Maybe<Scalars['Int']>;
  /** 数量 */
  num?: Maybe<Scalars['Int']>;
};

export type Comment2CommentGetInput = {
  /** 根评论下第一级评论的id */
  commentedParentCommentId: Scalars['Int'];
  /** 偏移量 */
  offset?: Maybe<Scalars['Int']>;
  /** 数量 */
  num?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** 登陆 */
  login: LoginRes;
  /** 注册 */
  register: RegisterRes;
  /** 添加文章 */
  addArticle: AddArticleRes;
  /** 编辑文章 */
  editArticle: EditArticleRes;
  /** 添加评论 */
  addComment: AddCommentRes;
};


export type MutationLoginArgs = {
  byPwd?: Maybe<ByPwdInput>;
};


export type MutationRegisterArgs = {
  byUserName?: Maybe<ByUserNameInput>;
};


export type MutationAddArticleArgs = {
  input: AddArticleInput;
};


export type MutationEditArticleArgs = {
  input: EditArticleInput;
};


export type MutationAddCommentArgs = {
  toUser?: Maybe<Comment2UserAddInput>;
  toArticle?: Maybe<Comment2ArticleAddInput>;
  toComment?: Maybe<Comment2CommentAddInput>;
};

/** 密码登陆 */
export type ByPwdInput = {
  /** 用户名 */
  userName: Scalars['String'];
  /** 密码 */
  pwd: Scalars['String'];
};

/** 用户名方式注册 */
export type ByUserNameInput = {
  /** 用户名 */
  userName: Scalars['String'];
  /** 密码 */
  pwd: Scalars['String'];
};

/** 发布文章所需内容 */
export type AddArticleInput = {
  /** 作者ID */
  userId: Scalars['Int'];
  /** 文章的标题 */
  title: Scalars['String'];
  /** 文章的内容（富文本） */
  content: Scalars['String'];
  /** 文章的领域 */
  field: Scalars['String'];
  /** 文章的标签 */
  tags: Array<Scalars['String']>;
};

/** 编辑文章所需内容 */
export type EditArticleInput = {
  /** 文章ID */
  id: Scalars['Int'];
  /** 作者ID */
  userId: Scalars['Int'];
  /** 文章的标题 */
  title: Scalars['String'];
  /** 文章的内容（富文本） */
  content: Scalars['String'];
  /** 文章的领域 */
  field: Scalars['String'];
  /** 文章的标签 */
  tags: Array<Scalars['String']>;
};

export type Comment2UserAddInput = {
  /** 发送人userId */
  userId: Scalars['Int'];
  /** 发送人用户名 */
  userName: Scalars['String'];
  /** 被评论的用户的id */
  commentedUserId: Scalars['Int'];
  /** 评论内容 */
  content: Scalars['String'];
};

export type Comment2ArticleAddInput = {
  /** 发送人userId */
  userId: Scalars['Int'];
  /** 发送人用户名 */
  userName: Scalars['String'];
  /** 被评论的文章的id */
  commentedArticleId: Scalars['Int'];
  /** 评论内容 */
  content: Scalars['String'];
};

export type Comment2CommentAddInput = {
  /** 发送人userId */
  userId: Scalars['Int'];
  /** 发送人用户名 */
  userName: Scalars['String'];
  /** 被评论的评论的id */
  commentedCommentId: Scalars['Int'];
  /** 根评论下第一级评论的id */
  commentedParentCommentId: Scalars['Int'];
  /** 评论内容 */
  content: Scalars['String'];
  /** 被评论的用户的id */
  commentedUserId?: Maybe<Scalars['Int']>;
  /** 被评论的文章的id */
  commentedArticleId?: Maybe<Scalars['Int']>;
};
