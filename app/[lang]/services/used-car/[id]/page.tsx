import HomeComponent from "../../../../[lang]/components/HomeComponent/page";

export async function generateStaticParams() {
  return [{ id: "1" }];
}
export default function page({ params }: { params: { id: string } }) {
  // console.log("params: ", params);
  return (
    <>
      <HomeComponent isHome={false} />
      <div className="px-5 pb-3">
        <h1 style={{ zIndex: 999 }}>{params.id}</h1>
      </div>
    </>
  );
}
