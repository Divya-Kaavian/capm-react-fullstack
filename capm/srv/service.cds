using {capm.db as db} from '../db/schema';

@path: '/helloWorld'
service HelloworldService {
    entity HelloWorld as projection on db.HelloWorld;
}
