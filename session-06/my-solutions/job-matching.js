function match(candidate, job) {
    if (!job.maxSalary || !candidate.minSalary){
      throw ERROR;
    }
    if (job.maxSalary>=(0.9*candidate.minSalary)){
      return true;
    }
    else{
      return false;
    }
  }