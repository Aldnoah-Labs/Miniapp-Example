@extends('layout/main')

@section('title','Form Ubah Data Mahasiswa')

@section('container')
<div class="container">
  <div class="row">
    <div class="col-8">
      <h1 class="mt-3">Form Ubah Data Mahasiswa</h1>
      @if ($errors->any())
          <div class="alert alert-danger">
              <ul>
                  @foreach ($errors->all() as $error)
                      <li>{{ $error }}</li>
                  @endforeach
              </ul>
          </div>
          <meta http-equiv="refresh" content="5; url={{url('/students/edit')}}"/>
      @endif

      <form method="post" action="{{url('/students')}}/{{$student->id}}">
        {{method_field('patch')}}
        {{csrf_field()}}
        <div class="form-group">
          <label for="nama">Nama</label>
          <input type="text" class="form-control" id="nama" placeholder="Masukkan Nama" name="nama" value="{{ $student->nama }}">
        </div>
        <div class="form-group">
          <label for="nrp">NRP</label>
          <input type="text" class="form-control" id="nrp" placeholder="Masukkan Nama" name="nrp" value="{{ $student->nrp }}">
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="text" class="form-control" id="email" placeholder="Masukkan Nama" name="email" value="{{ $student->email }}">
        </div>
        <div class="form-group">
          <label for="jurusan">Jurusan</label>
          <input type="text" class="form-control" id="jurusan" placeholder="Masukkan Nama" name="jurusan" value="{{ $student->jurusan }}">
        </div>
        <button type="submit" class="btn btn-primary">Ubah Data!</button>
      </form>
    </div>
  </div>
</div>
@endsection
