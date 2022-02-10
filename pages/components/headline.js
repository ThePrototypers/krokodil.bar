export default function Headline({ title }) {
  return (
    <div className="flex mt-8 desktop:mt-28 items-center">
      <div className="w-1/4 ml-2 desktop:invisible"><a href="javascript:history.back()"><img src="/img/arrow.svg" /></a></div>
      <div className="w-2/4 text-center pt-2"><h1 className="text-center uppercase s1">{title}</h1></div>
      <div className="w-1/4"></div>
    </div>
  )
}
