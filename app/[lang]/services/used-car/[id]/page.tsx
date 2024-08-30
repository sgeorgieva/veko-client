import HomeComponent from "@/app/[lang]/components/HomeComponent/page";

export default function page({ params }: { params: { id: string } }) {
  console.log("params", params.model);

  return (
    <>
      <HomeComponent isHome={false} />
      <div className="px-5 pb-3">
        <h1 style={{ zIndex: 999 }}>{params.id}</h1>
      </div>
    </>
  );
}
