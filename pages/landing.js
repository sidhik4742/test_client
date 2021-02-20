import Link from 'next/link';

import Layout from '../components/layout/layout';

function landing() {
  return (
    <Layout>
      <div className="row">
        <div className="col-12">
          <h1>This is landing page</h1>
        </div>
        <div className="col-12">
          <Link href="/">
            <button type="button" className="btn btn-primary">
              Logout
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default landing;
