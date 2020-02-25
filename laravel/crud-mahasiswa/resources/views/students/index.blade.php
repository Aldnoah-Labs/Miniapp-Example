@extends('layout/main')

@section('title','Aldnoah About')

@section('container')
<div class="container">
  <div class="row">
    <div class="col-6">
      <h1 class="mt-3">Daftar Mahasiswa</h1>

      <a href="{{url('/students/create')}}" class="btn btn-primary my-3">Tambah Data Mahasiswa</a>
      @if (session('status'))
          <div class="alert alert-success alert-dismissible fade show" role="alert">
              {{ session('status') }}
              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
          </div>
          <meta http-equiv="refresh" content="5; url={{url('/students')}}"/>
      @endif

      <ul class="list-group">
        @foreach ($students as $student)
        <li class="list-group-item d-flex justify-content-between align-items-center">
          {{$student -> nama}}
          <a href="{{url('/students')}}/{{$student->id}}" class="badge badge badge-info badge-pill">Detail</a>
          {{-- <span class="badge badge-primary badge-pill">14</span> --}}
        </li>
        @endforeach
      </ul>
    </div>
  </div>
</div>
@endsection