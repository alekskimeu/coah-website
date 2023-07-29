import Image from "next/image";

import { Layout } from "@/components";

import image from "../../assets/player.png";

export default function Player() {
  return (
    <Layout>
      <section className="pt-[3rem] pb-[5rem]">
        <div className="container mx-auto px-20">
          <div className="flex gap-10">
            <div className="flex items-center gap-10">
              <div className="flex-1">
                <h2>JOHN DOE</h2>
                <h4>Striker</h4>
              </div>
              <div className="flex-1">
                <Image src={image} />
              </div>
            </div>

            <div>
              <div className="grid grid-cols-2">
                <p>Name</p> <p>John Doe</p>
              </div>

              <table className="table-auto">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>DOB</th>
                    <th>Age</th>
                    <th>Position</th>
                    <th>Residence</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>John Doe</td>
                    <td>John Doe</td>
                    <td>John Doe</td>
                    <td>John Doe</td>
                    <td>John Doe</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex items-center gap-10 pt-10">
            <div className="flex-1">
              <h4>ABOUT</h4>
              <p>
                That night at the hotel, in our room with the long empty hall
                outside and our shoes outside the door, a thick carpet on the
                floor of the room, outside the windows the rain falling and in
                the room light and pleasant and cheerful, then the light out and
                it exciting with smooth sheets and the bed comfortable, feeling
                that we had come home, feeling no longer alone, waking in the
                night to find the other one there, and not gone away; all other
                things were unreal.
              </p>
            </div>

            <div>
              <Image src={image} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
