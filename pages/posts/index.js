import { useState } from 'react'

function Tree({ treeData }) {
  return (
    <ul>
      {treeData.map(node => (
        <TreeNode node={node} key={node.key} />
      ))}
    </ul>
  )
}

function TreeNode({ node }) {
  const { children, label } = node

  const [showChildren, setShowChildren] = useState(false)

  const handleClick = () => {
    setShowChildren(!showChildren)
  }
  return (
    <>
      <div onClick={handleClick} style={{ marginBottom: '10px' }}>
        <span>{label}</span>
      </div>
      <ul style={{ paddingLeft: '10px', borderLeft: '1px solid black' }}>
        {showChildren && <Tree treeData={children} />}
      </ul>
    </>
  )
}

const treeData = [
  {
    key: '0',
    label: 'Documents',
    children: [
      {
        key: '0-0',
        label: 'Document 1-1',
        children: [
          {
            key: '0-1-1',
            label: 'Document-0-1.doc',
          },
          {
            key: '0-1-2',
            label: 'Document-0-2.doc',
          },
        ],
      },
    ],
  },
  {
    key: '1',
    label: 'Desktop',
    children: [
      {
        key: '1-0',
        label: 'document1.doc',
      },
      {
        key: '0-0',
        label: 'documennt-2.doc',
      },
    ],
  },
  {
    key: '2',
    label: 'Downloads',
    children: [],
  },
]

function Blog() {
  return (
    <>
      <h1>React Tree View</h1>
      <Tree treeData={treeData} />
    </>
  )
}

export default Blog
