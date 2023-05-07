import { Heading } from './CustomHTMLElements'
import CodeBlock from './CodeBlock/CodeBlock'
import Image from 'next/image'

const components = {
  CodeBlock,
  h2: (props: any) => (
    <Heading tag="h2" {...props}>
      {props.children}
    </Heading>
  ),
  h3: (props: any) => (
    <Heading tag="h3" {...props}>
      {props.children}
    </Heading>
  ),
  mono: (props: any) => <code className="text-sm">{props.children}</code>,
  code: (props: any) => <CodeBlock {...props} />,
  img: (props: any) => {
    return (
      <span className={['next-image--dynamic-fill'].join(' ')}>
        <Image {...props} className={['rounded-md border'].join(' ')} layout="fill" />
      </span>
    )
  },
}

export default components
