// 基础类型
export interface BaseEntity {
  id: string
  createdAt: string
  updatedAt: string
}

// 用户类型
export interface User extends BaseEntity {
  email: string
  name: string
  avatar?: string
  role: UserRole
  isActive: boolean
}

export type UserRole = 'admin' | 'user' | 'moderator'

// API响应类型
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  error?: string
  code?: number
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number
    pageSize: number
    total: number
    totalPages: number
  }
}

// 分页参数
export interface PaginationParams {
  page?: number
  pageSize?: number
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}

// 搜索参数
export interface SearchParams extends PaginationParams {
  query?: string
  filters?: Record<string, any>
}

// 表单类型
export interface FormField {
  name: string
  label: string
  type:
    | 'text'
    | 'email'
    | 'password'
    | 'number'
    | 'textarea'
    | 'select'
    | 'checkbox'
    | 'radio'
  required?: boolean
  placeholder?: string
  options?: Array<{ value: string; label: string }>
  validation?: {
    min?: number
    max?: number
    pattern?: RegExp
    message?: string
  }
}

// 主题类型
export type Theme = 'light' | 'dark' | 'system'

// 语言类型
export type Language = 'zh-CN' | 'en-US'

// 文件类型
export interface FileUpload {
  id: string
  name: string
  size: number
  type: string
  url: string
  uploadedAt: string
}

// 通知类型
export interface Notification {
  id: string
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  message: string
  duration?: number
  action?: {
    label: string
    onClick: () => void
  }
}

// 路由类型
export interface Route {
  path: string
  name: string
  icon?: React.ComponentType
  children?: Route[]
  meta?: {
    title?: string
    description?: string
    requiresAuth?: boolean
    roles?: UserRole[]
  }
}

// 面包屑类型
export interface Breadcrumb {
  label: string
  href?: string
  icon?: React.ComponentType
}

// 表格列类型
export interface TableColumn<T = any> {
  key: string
  title: string
  dataIndex: keyof T
  width?: number | string
  sortable?: boolean
  render?: (value: any, record: T, index: number) => React.ReactNode
}

// 菜单项类型
export interface MenuItem {
  key: string
  label: string
  icon?: React.ComponentType
  href?: string
  children?: MenuItem[]
  disabled?: boolean
  danger?: boolean
}

// 统计数据类型
export interface Statistic {
  title: string
  value: number | string
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  precision?: number
  valueStyle?: React.CSSProperties
}

// 图表数据类型
export interface ChartData {
  name: string
  value: number
  color?: string
}

// 错误类型
export interface AppError {
  code: string
  message: string
  details?: any
  stack?: string
}

// 配置类型
export interface AppConfig {
  name: string
  version: string
  description: string
  url: string
  apiUrl: string
  environment: 'development' | 'staging' | 'production'
}

// 环境变量类型
export interface Environment {
  NODE_ENV: 'development' | 'production' | 'test'
  NEXT_PUBLIC_APP_NAME: string
  NEXT_PUBLIC_APP_URL: string
  NEXT_PUBLIC_API_URL: string
  NEXT_PUBLIC_GA_ID?: string
}

// 组件Props类型
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

// 按钮类型
export interface ButtonProps extends BaseComponentProps {
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
}

// 输入框类型
export interface InputProps extends BaseComponentProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'
  placeholder?: string
  value?: string
  defaultValue?: string
  disabled?: boolean
  required?: boolean
  error?: string
  onChange?: (value: string) => void
  onBlur?: () => void
  onFocus?: () => void
}

// 模态框类型
export interface ModalProps extends BaseComponentProps {
  open: boolean
  title?: string
  onClose: () => void
  onConfirm?: () => void
  confirmText?: string
  cancelText?: string
  loading?: boolean
}

// 抽屉类型
export interface DrawerProps extends BaseComponentProps {
  open: boolean
  title?: string
  placement?: 'left' | 'right' | 'top' | 'bottom'
  width?: number | string
  height?: number | string
  onClose: () => void
}

// 工具提示类型
export interface TooltipProps extends BaseComponentProps {
  content: string
  placement?: 'top' | 'bottom' | 'left' | 'right'
  trigger?: 'hover' | 'click' | 'focus'
  delay?: number
}

// 下拉菜单类型
export interface DropdownProps extends BaseComponentProps {
  trigger: React.ReactNode
  items: Array<{
    key: string
    label: string
    icon?: React.ComponentType
    onClick?: () => void
    disabled?: boolean
    danger?: boolean
  }>
  placement?: 'top' | 'bottom' | 'left' | 'right'
}

// 标签页类型
export interface TabProps extends BaseComponentProps {
  key: string
  label: string
  icon?: React.ComponentType
  disabled?: boolean
}

export interface TabsProps extends BaseComponentProps {
  activeKey: string
  items: TabProps[]
  onChange: (key: string) => void
  type?: 'line' | 'card'
}

// 步骤条类型
export interface StepProps {
  title: string
  description?: string
  icon?: React.ComponentType
  status?: 'wait' | 'process' | 'finish' | 'error'
}

export interface StepsProps extends BaseComponentProps {
  current: number
  items: StepProps[]
  onChange?: (current: number) => void
  direction?: 'horizontal' | 'vertical'
}

// 进度条类型
export interface ProgressProps extends BaseComponentProps {
  percent: number
  status?: 'success' | 'exception' | 'active'
  strokeWidth?: number
  showInfo?: boolean
  format?: (percent: number) => string
}

// 评分类型
export interface RateProps extends BaseComponentProps {
  value: number
  count?: number
  disabled?: boolean
  allowHalf?: boolean
  onChange?: (value: number) => void
}

// 开关类型
export interface SwitchProps extends BaseComponentProps {
  checked: boolean
  disabled?: boolean
  loading?: boolean
  onChange?: (checked: boolean) => void
}

// 选择器类型
export interface SelectOption {
  value: string | number
  label: string
  disabled?: boolean
  children?: SelectOption[]
}

export interface SelectProps extends BaseComponentProps {
  value?: string | number | (string | number)[]
  options: SelectOption[]
  placeholder?: string
  disabled?: boolean
  loading?: boolean
  multiple?: boolean
  onChange?: (value: string | number | (string | number)[]) => void
}

// 日期选择器类型
export interface DatePickerProps extends BaseComponentProps {
  value?: Date
  placeholder?: string
  disabled?: boolean
  format?: string
  onChange?: (date: Date | null) => void
}

// 时间选择器类型
export interface TimePickerProps extends BaseComponentProps {
  value?: Date
  placeholder?: string
  disabled?: boolean
  format?: string
  onChange?: (time: Date | null) => void
}

// 颜色选择器类型
export interface ColorPickerProps extends BaseComponentProps {
  value?: string
  disabled?: boolean
  onChange?: (color: string) => void
}

// 上传类型
export interface UploadProps extends BaseComponentProps {
  accept?: string
  multiple?: boolean
  maxCount?: number
  maxSize?: number
  disabled?: boolean
  loading?: boolean
  onUpload?: (files: File[]) => void
  onRemove?: (file: FileUpload) => void
}

// 树形控件类型
export interface TreeNode {
  key: string
  title: string
  icon?: React.ComponentType
  children?: TreeNode[]
  disabled?: boolean
  selectable?: boolean
}

export interface TreeProps extends BaseComponentProps {
  data: TreeNode[]
  selectedKeys?: string[]
  expandedKeys?: string[]
  onSelect?: (selectedKeys: string[]) => void
  onExpand?: (expandedKeys: string[]) => void
}

// 级联选择器类型
export interface CascaderOption {
  value: string | number
  label: string
  children?: CascaderOption[]
  disabled?: boolean
}

export interface CascaderProps extends BaseComponentProps {
  value?: (string | number)[]
  options: CascaderOption[]
  placeholder?: string
  disabled?: boolean
  onChange?: (value: (string | number)[]) => void
}

// 自动完成类型
export interface AutoCompleteProps extends BaseComponentProps {
  value?: string
  options: string[]
  placeholder?: string
  disabled?: boolean
  loading?: boolean
  onSearch?: (value: string) => void
  onChange?: (value: string) => void
  onSelect?: (value: string) => void
}

// 滑块类型
export interface SliderProps extends BaseComponentProps {
  value?: number | [number, number]
  min?: number
  max?: number
  step?: number
  disabled?: boolean
  range?: boolean
  onChange?: (value: number | [number, number]) => void
}

// 数字输入框类型
export interface InputNumberProps extends BaseComponentProps {
  value?: number
  min?: number
  max?: number
  step?: number
  disabled?: boolean
  placeholder?: string
  onChange?: (value: number | null) => void
}

// 文本域类型
export interface TextAreaProps extends BaseComponentProps {
  value?: string
  placeholder?: string
  rows?: number
  maxLength?: number
  disabled?: boolean
  autoSize?: boolean | { minRows: number; maxRows: number }
  onChange?: (value: string) => void
}

// 复选框类型
export interface CheckboxProps extends BaseComponentProps {
  checked?: boolean
  disabled?: boolean
  indeterminate?: boolean
  onChange?: (checked: boolean) => void
}

export interface CheckboxGroupProps extends BaseComponentProps {
  value?: (string | number)[]
  options: Array<{ label: string; value: string | number; disabled?: boolean }>
  disabled?: boolean
  onChange?: (value: (string | number)[]) => void
}

// 单选框类型
export interface RadioProps extends BaseComponentProps {
  checked?: boolean
  disabled?: boolean
  onChange?: (checked: boolean) => void
}

export interface RadioGroupProps extends BaseComponentProps {
  value?: string | number
  options: Array<{ label: string; value: string | number; disabled?: boolean }>
  disabled?: boolean
  onChange?: (value: string | number) => void
}

// 表单类型
export interface FormProps extends BaseComponentProps {
  layout?: 'horizontal' | 'vertical' | 'inline'
  labelCol?: { span: number }
  wrapperCol?: { span: number }
  onSubmit?: (values: Record<string, any>) => void
  onReset?: () => void
}

export interface FormItemProps extends BaseComponentProps {
  label?: string
  name: string
  required?: boolean
  rules?: Array<{
    required?: boolean
    message?: string
    pattern?: RegExp
    min?: number
    max?: number
    validator?: (value: any) => boolean | string
  }>
}

// 列表类型
export interface ListProps<T = any> extends BaseComponentProps {
  dataSource: T[]
  renderItem: (item: T, index: number) => React.ReactNode
  loading?: boolean
  pagination?: PaginationParams
  onLoadMore?: () => void
}

// 卡片类型
export interface CardProps extends BaseComponentProps {
  title?: string
  extra?: React.ReactNode
  cover?: React.ReactNode
  actions?: React.ReactNode[]
  hoverable?: boolean
  bordered?: boolean
  size?: 'default' | 'small'
}

// 描述列表类型
export interface DescriptionsProps extends BaseComponentProps {
  title?: string
  column?: number
  bordered?: boolean
  size?: 'default' | 'middle' | 'small'
}

export interface DescriptionsItemProps extends BaseComponentProps {
  label: string
  span?: number
}

// 空状态类型
export interface EmptyProps extends BaseComponentProps {
  image?: React.ReactNode
  description?: string
}

// 结果类型
export interface ResultProps extends BaseComponentProps {
  status: 'success' | 'error' | 'info' | 'warning' | '404' | '403' | '500'
  title: string
  subTitle?: string
  extra?: React.ReactNode
}

// 警告类型
export interface AlertProps extends BaseComponentProps {
  type: 'success' | 'info' | 'warning' | 'error'
  message: string
  description?: string
  showIcon?: boolean
  closable?: boolean
  onClose?: () => void
}

// 徽章类型
export interface BadgeProps extends BaseComponentProps {
  count?: number | string
  dot?: boolean
  offset?: [number, number]
  overflowCount?: number
  showZero?: boolean
  status?: 'success' | 'processing' | 'default' | 'error' | 'warning'
  text?: string
}

// 标签类型
export interface TagProps extends BaseComponentProps {
  color?: string
  closable?: boolean
  onClose?: () => void
}

// 头像类型
export interface AvatarProps extends BaseComponentProps {
  src?: string
  alt?: string
  size?: number | 'large' | 'small' | 'default'
  shape?: 'circle' | 'square'
  icon?: React.ComponentType
}

// 分割线类型
export interface DividerProps extends BaseComponentProps {
  type?: 'horizontal' | 'vertical'
  orientation?: 'left' | 'right' | 'center'
  dashed?: boolean
  plain?: boolean
}

// 空间类型
export interface SpaceProps extends BaseComponentProps {
  direction?: 'horizontal' | 'vertical'
  size?: number | 'small' | 'middle' | 'large'
  align?: 'start' | 'end' | 'center' | 'baseline'
  wrap?: boolean
}

// 栅格类型
export interface RowProps extends BaseComponentProps {
  gutter?: number | [number, number]
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between'
  align?: 'top' | 'middle' | 'bottom'
  wrap?: boolean
}

export interface ColProps extends BaseComponentProps {
  span?: number
  offset?: number
  order?: number
  pull?: number
  push?: number
  xs?: number | ColProps
  sm?: number | ColProps
  md?: number | ColProps
  lg?: number | ColProps
  xl?: number | ColProps
  xxl?: number | ColProps
}

// 布局类型
export interface LayoutProps extends BaseComponentProps {
  hasSider?: boolean
}

export interface HeaderProps extends BaseComponentProps {
  height?: number | string
}

export interface SiderProps extends BaseComponentProps {
  width?: number | string
  collapsed?: boolean
  collapsedWidth?: number
  onCollapse?: (collapsed: boolean) => void
}

export interface ContentProps extends BaseComponentProps {
  style?: React.CSSProperties
}

export interface FooterProps extends BaseComponentProps {
  style?: React.CSSProperties
}

// 页面头部类型
export interface PageHeaderProps extends BaseComponentProps {
  title: string
  subtitle?: string
  backIcon?: React.ReactNode
  onBack?: () => void
  extra?: React.ReactNode
  breadcrumb?: Breadcrumb[]
  tags?: React.ReactNode[]
  avatar?: React.ReactNode
  ghost?: boolean
}

// 锚点类型
export interface AnchorProps extends BaseComponentProps {
  items: Array<{
    key: string
    href: string
    title: string
    children?: AnchorProps['items']
  }>
  offsetTop?: number
  bounds?: number
  affix?: boolean
  showInkInFixed?: boolean
}

// 回到顶部类型
export interface BackTopProps extends BaseComponentProps {
  target?: () => HTMLElement | Window
  visibilityHeight?: number
  onClick?: () => void
}

// 评论类型
export interface CommentProps extends BaseComponentProps {
  author: React.ReactNode
  avatar?: React.ReactNode
  content: React.ReactNode
  datetime?: React.ReactNode
  actions?: React.ReactNode[]
  children?: React.ReactNode
}

// 时间轴类型
export interface TimelineProps extends BaseComponentProps {
  pending?: React.ReactNode
  reverse?: boolean
  mode?: 'left' | 'alternate' | 'right'
}

export interface TimelineItemProps extends BaseComponentProps {
  dot?: React.ReactNode
  color?: string
  children?: React.ReactNode
}

// 折叠面板类型
export interface CollapseProps extends BaseComponentProps {
  activeKey?: string | string[]
  defaultActiveKey?: string | string[]
  accordion?: boolean
  onChange?: (key: string | string[]) => void
}

export interface CollapsePanelProps extends BaseComponentProps {
  header: React.ReactNode
  key: string
  disabled?: boolean
  showArrow?: boolean
  forceRender?: boolean
}

// 手风琴类型
export interface AccordionProps extends BaseComponentProps {
  activeKey?: string | string[]
  defaultActiveKey?: string | string[]
  onChange?: (key: string | string[]) => void
}

export interface AccordionItemProps extends BaseComponentProps {
  header: React.ReactNode
  key: string
  disabled?: boolean
}

// 轮播图类型
export interface CarouselProps extends BaseComponentProps {
  autoplay?: boolean
  dots?: boolean
  easing?: string
  effect?: 'scrollx' | 'fade'
  afterChange?: (current: number) => void
  beforeChange?: (from: number, to: number) => void
}

// 图片类型
export interface ImageProps extends BaseComponentProps {
  src: string
  alt?: string
  width?: number | string
  height?: number | string
  fallback?: string
  preview?:
    | boolean
    | {
        visible?: boolean
        onVisibleChange?: (visible: boolean) => void
      }
  placeholder?: React.ReactNode
}

// 骨架屏类型
export interface SkeletonProps extends BaseComponentProps {
  active?: boolean
  avatar?: boolean | SkeletonAvatarProps
  paragraph?: boolean | SkeletonParagraphProps
  title?: boolean | SkeletonTitleProps
  loading?: boolean
}

export interface SkeletonAvatarProps {
  active?: boolean
  size?: number | 'large' | 'small' | 'default'
  shape?: 'circle' | 'square'
}

export interface SkeletonParagraphProps {
  rows?: number
  width?: number | string | (number | string)[]
}

export interface SkeletonTitleProps {
  width?: number | string
}

// 加载类型
export interface SpinProps extends BaseComponentProps {
  spinning?: boolean
  size?: 'small' | 'default' | 'large'
  tip?: string
  delay?: number
  indicator?: React.ReactNode
}

// 全局类型
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string,
      config?: Record<string, any>
    ) => void
  }
}
