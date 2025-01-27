'use client';

import '@/lib/env';

import { IDataPerson } from '@/types/person';

export default function HomePage() {
  const persons: IDataPerson[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

  return (
    <main>
      <section className="flex items-center justify-center bg-white">
        <div className="relative flex min-h-screen flex-col items-center justify-center py-12 text-center">
          <div className="flex gap-4">
            {persons.map((person) => (
              <div key={person.key} className="flex flex-col items-center justify-center">
                <h2 className="text-2xl">{person.name}</h2>
                <p className="text-lg">{person.address}</p>
                <p className="text-lg">{person.age}</p>
                <div className="flex">
                  {person.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 mx-1 text-sm text-white bg-gray-500 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* <Button className="mt-4" href="/project">
            Projects
          </Button> */}
        </div>
        <footer className="absolute bottom-2 text-gray-700">
          © {new Date().getFullYear()} some rights reserved.
        </footer>
      </section>
    </main>
  );
}
