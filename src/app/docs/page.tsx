import Link from 'next/link';

export default function DocsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">文档页面</h1>
      <p className="mb-8">这里是文档的起点。您可以在这里添加您的项目文档。</p>
      <Link href="/" className="text-blue-500 hover:underline">
        返回首页
      </Link>
    </div>
  );
}
